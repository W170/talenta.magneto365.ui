import React, { ChangeEvent, FC, Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { FilterSearchItem } from '@components/UI/molecules/FilterSearchItem'
import { FilterMenuItem } from '@components/UI/molecules/FilterMenuItem'
import { Switch } from '@components/UI/atoms/Switch'
import { MenuSearch } from '@components/UI/molecules/MenuSearch'
import { ISearchRenderTypeOption } from '@components/UI/template'
import { IFilterCardOnSearch, ISetIsAppliedProps } from './FilterCardOnSearch.interface'
import { cleanSearch, getValues, refreshChildren, refreshParents } from './utils'
import { useKeyboard } from './hooks'
import styles from './FilterCardOnSearch.module.scss'

export const FilterCardOnSearch: FC<IFilterCardOnSearch> = ({
  label,
  field,
  repository,
  child,
  filtersApplied,
  params,
  searchPlaceholder,
  switchText,
  setIsApplied,
  unApplyWithChild,
  getOptionsOnLoad,
  getOptionsOnSearch,
  ...props
}) => {
  const [options, setOptions] = useState<ISearchRenderTypeOption[]>([])
  const [appliedOptions, setAppliedOptions] = useState<ISearchRenderTypeOption[]>([])
  const [refInput, setRefInput] = useState<React.RefObject<HTMLInputElement> | null>(null)

  const [keyboardIndex] = useKeyboard(field, options.length, () => cleanSearch(refInput, setOptions))
  const values = useMemo(() => getValues(filtersApplied), [filtersApplied])

  // this effect load labels when page is reloaded
  useEffect(() => {
    if (values && values.length > appliedOptions?.length && !options.length) {
      getOptionsOnLoad(field, values)?.then((opt) => setAppliedOptions(opt))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => refreshChildren(params, setAppliedOptions), [params])

  useEffect(() => refreshParents(filtersApplied, setAppliedOptions), [filtersApplied])

  const handleSearch = useCallback(
    async (event: ChangeEvent<HTMLInputElement>, inputRef: React.MutableRefObject<null>) => {
      event.preventDefault()
      !refInput && setRefInput(inputRef)
      // setSearching(true);
      const searchedOptions = await getOptionsOnSearch({
        repository,
        field,
        value: event.target.value,
        params
      })
      // setSearching(false);
      if (!searchedOptions) return
      setOptions(searchedOptions.filter((opt) => !appliedOptions.find((optApplied) => optApplied.id === opt.id)))
    },
    [getOptionsOnSearch, setOptions, appliedOptions, repository, field, params, refInput]
  )

  const callSetIsApplied = useCallback(
    (filter: ISetIsAppliedProps) => {
      setIsApplied(filter)?.then(() => {
        const totalApplied = filter.isApplied
          ? appliedOptions.filter((opt) => opt.id !== filter.id)
          : filter.multiple
          ? [...appliedOptions, { ...options.filter((opt) => opt.id === filter.id)[0], isApplied: true }]
          : [{ ...options.filter((opt) => opt.id === filter.id)[0], isApplied: true }]
        setAppliedOptions(totalApplied)
      })
      cleanSearch(refInput, setOptions)
    },
    [appliedOptions, options, setIsApplied, refInput]
  )

  const handleApply = useCallback(
    (filter: ISetIsAppliedProps) => {
      if (child && filter.isApplied) {
        return unApplyWithChild({ child, parentId: filter.id, parentField: filter.field }).then(() => {
          setAppliedOptions((current) => current.filter((opt) => opt.id !== filter.id))
        })
      }
      if (child && !filter.multiple && appliedOptions.length) {
        unApplyWithChild({
          child,
          parentId: appliedOptions[0].id,
          parentField: filter.field,
          newParentId: filter.id
        }).then(() => {
          const newParent = options.find((opt) => opt.id === filter.id)
          newParent && setAppliedOptions([{ ...newParent, isApplied: true }])
          cleanSearch(refInput, setOptions)
        })
      } else {
        callSetIsApplied(filter)
      }
    },
    [unApplyWithChild, callSetIsApplied, refInput, child, appliedOptions, options]
  )

  const displayMenuSearch = useMemo(() => {
    return (
      <MenuSearch
        show={!!options.length}
        handleOnBlur={() => cleanSearch(refInput, setOptions, 300)}
        content={options.map((opt, key) => {
          const optProps = { ...props, ...opt, field, setIsApplied: handleApply, isSearched: true }
          return (
            <FilterMenuItem
              key={`${key}-${opt.label}`}
              customId={`${field}-menu-item-${key}`}
              customClass={`${key === keyboardIndex ? styles.selected : ''}`}
              {...optProps}
            />
          )
        })}
      >
        <FilterSearchItem
          placeholder={searchPlaceholder as string}
          disabled={params ? !params.length : false}
          loading={props.loading}
          handleSearch={handleSearch}
        />
      </MenuSearch>
    )
  }, [options, field, params, searchPlaceholder, props, refInput, keyboardIndex, handleApply, handleSearch])

  const displayAppliedOptions = useMemo(() => {
    return (
      <div className={styles['magneto-ui-filter-onSearch_options']}>
        {appliedOptions.map((opt, key) => {
          const optProps = { ...props, ...opt, field, setIsApplied: handleApply, isSearched: true }
          return <FilterMenuItem key={`${key}-${opt.label}`} {...optProps} />
        })}
      </div>
    )
  }, [appliedOptions, field, props, handleApply])

  const displayChild = useMemo(() => {
    if (!child) return <Fragment />
    const childProps = {
      ...props,
      ...child,
      params: values as number[] | string[],
      setIsApplied,
      unApplyWithChild,
      getOptionsOnLoad,
      getOptionsOnSearch
    }
    return <FilterCardOnSearch {...childProps} />
  }, [setIsApplied, unApplyWithChild, getOptionsOnLoad, getOptionsOnSearch, values, props, child])

  return (
    <article className={`${styles['magneto-ui-filter-onSearch']} ${styles.hasSearch}`}>
      <div className={styles['magneto-ui-filter-onSearch_header']}>
        <p>{label}</p>
        {switchText && (
          <Switch
            //TODO: review isActive, setIsActive
            title={switchText}
            setIsActive={(value) => console.log('Change isActive', value)}
            isActive
          />
        )}
      </div>
      {displayMenuSearch}
      {displayAppliedOptions}
      {displayChild}
    </article>
  )
}

FilterCardOnSearch.defaultProps = {
  searchPlaceholder: '',
  switchText: ''
}
