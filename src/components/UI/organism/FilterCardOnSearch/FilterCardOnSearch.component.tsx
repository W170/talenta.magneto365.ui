import React, { ChangeEvent, FC, Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { FilterSearchItem } from '@components/UI/molecules/FilterSearchItem'
import { FilterMenuItem } from '@components/UI/molecules/FilterMenuItem'
import { Switch } from '@components/UI/atoms/Switch'
import { ISearchRenderTypeOption } from '@components/UI/template'
import { IFilterCardOnSearch, ISetIsAppliedProps } from './FilterCardOnSearch.interface'
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

  const values = useMemo(() => {
    return filtersApplied?.map((item) => {
      if (typeof item === 'string' || typeof item === 'number') return item
      return ''
    })
  }, [filtersApplied])

  // this effect load labels when page is reloaded
  useEffect(() => {
    if (values && values.length > appliedOptions?.length && !options.length) {
      getOptionsOnLoad(field, values)?.then((opt) => setAppliedOptions(opt))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //this effect remove parent selection when clear all filters
  useEffect(() => {
    if (props.multiple || !values) return
    setAppliedOptions((current) => (current.length > values?.length ? [] : current))
  }, [values, props.multiple, setAppliedOptions])

  // this effect remove child selections
  useEffect(() => {
    if (!params) return
    const parents: string[] = []
    for (const parent of params) {
      if (typeof parent !== 'string') return
      const [parentId] = parent.split('@')
      parents.push(parentId)
    }
    setAppliedOptions((current) => {
      return current.filter((option) => {
        return parents.find((parent) => String(parent) === String(option.parentId))
      })
    })
  }, [params])

  const handleSearch = useCallback(
    async (event: ChangeEvent<HTMLInputElement>, inputRef: React.MutableRefObject<null>) => {
      event.preventDefault()
      // setSearching(true);
      const searchedOptions = await getOptionsOnSearch({
        repository,
        field,
        value: event.target.value,
        params
      })
      // setSearching(false);
      // setOptions(foundOptions);
      setOptions(searchedOptions)
      !refInput && setRefInput(inputRef)
    },
    [getOptionsOnSearch, setOptions, repository, field, params, refInput]
  )

  const handleApply = useCallback(
    (filter: ISetIsAppliedProps) => {
      if (child && filter.isApplied) {
        unApplyWithChild({ child, parentId: filter.id, parentField: filter.field }).then(() => {
          setAppliedOptions((current) => current.filter((opt) => opt.id !== filter.id))
        })
      } else {
        setIsApplied(filter)?.then(() => {
          const totalApplied = filter.isApplied
            ? appliedOptions.filter((opt) => opt.id !== filter.id)
            : filter.multiple
            ? [...appliedOptions, { ...options.filter((opt) => opt.id === filter.id)[0], isApplied: true }]
            : [{ ...options.filter((opt) => opt.id === filter.id)[0], isApplied: true }]
          setAppliedOptions(totalApplied)
        })
      }
      setOptions([])
      if (refInput?.current) {
        refInput.current.value = ''
      }
    },
    [unApplyWithChild, setIsApplied, child, appliedOptions, options, refInput]
  )

  const displayChild = useMemo(() => {
    if (!child) return <Fragment />
    const childProps = {
      params: values as number[] | string[],
      setIsApplied,
      unApplyWithChild,
      getOptionsOnLoad,
      getOptionsOnSearch,
      ...props,
      ...child
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

      <FilterSearchItem
        handleSearch={handleSearch}
        placeholder={searchPlaceholder as string}
        disabled={params ? !params.length : false}
      />

      <div className={styles['magneto-ui-filter-onSearch_options']}>
        {[...options, ...appliedOptions].map((opt, key) => {
          const optProps = { ...props, ...opt, field, setIsApplied: handleApply, isSearched: true }
          return <FilterMenuItem key={`${key}-${opt.label}`} {...optProps} />
        })}
      </div>
      {displayChild}
    </article>
  )
}

FilterCardOnSearch.defaultProps = {
  searchPlaceholder: '',
  switchText: ''
}
