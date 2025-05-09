import React, { ChangeEvent, FC, Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { FilterSearchItem } from '@components/UI/molecules/FilterSearchItem'
import { FilterMenuItem } from '@components/UI/molecules/FilterMenuItem'
import { Switch } from '@components/UI/atoms/Switch'
import { ERenderType } from '@constants/stories'
import { IFilterValue } from '@components/UI/template'
import { IFilterCard } from './FilterCard.interface'
import styles from './FilterCard.module.scss'
import { IconItem } from '@components/UI/atoms'
import { ArrowDown2 } from '@constants/icons.constants'

export const FilterCard: FC<IFilterCard> = ({
  label,
  values,
  renderType,
  searchPlaceholder = '',
  switchText = '',
  setIsApplied,
  index,
  setCurrentOpenFilter,
  showFilters,
  ...props
}) => {
  const [options, setOptions] = useState<IFilterValue[]>(values)
  const [showItems, setShowItems] = useState<boolean>(showFilters)

  const hasSearch = useMemo(() => renderType === ERenderType.multiSelect, [renderType])
  const hasTotal = useMemo(() => !values.find((value) => value.isApplied), [values])
  const appliedOption = useMemo(() => options.find(({ isApplied }) => isApplied), [options])
  const hasntOptions = useMemo(() => options.every(({ total }) => total == 0 || total == undefined), [options])
  const isInteractiveSection = useMemo(() => !hasntOptions && !appliedOption, [hasntOptions, appliedOption])

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      const searchedOptions = values.filter((opt) => opt.label.toLowerCase().includes(event.target.value.toLowerCase()))
      setOptions(searchedOptions)
    },
    [values, setOptions]
  )

  const handleShowItems = useCallback(() => {
    if (!showItems) setCurrentOpenFilter(index)
    else setCurrentOpenFilter(99)
    setShowItems(!showItems)
  }, [showItems, index, setCurrentOpenFilter])

  const renderItem = useCallback(
    (opt: IFilterValue, key = 0) => {
      const optProps = { ...props, ...opt!, hasTotal, setIsApplied, type: props.type }

      return <FilterMenuItem key={`${key}-${opt.label}`} {...optProps} />
    },
    [hasTotal, setIsApplied, props]
  )

  const optionsRendered = useMemo(() => {
    if (appliedOption) return renderItem(appliedOption)
    if (hasntOptions) return <Fragment />
    return options.map(renderItem)
  }, [options, appliedOption, renderItem, hasntOptions])

  useEffect(() => {
    if (appliedOption != undefined) setShowItems(true)
  }, [appliedOption])

  useEffect(() => {
    setOptions(values)
  }, [values])

  useEffect(() => {
    if (!appliedOption && !hasntOptions && showFilters != showItems) setShowItems(showFilters)
  }, [showFilters, appliedOption, hasntOptions, showItems])

  if (!values.length) return <Fragment />

  return (
    <article
      className={`${styles[`magneto-ui-filter-card`]} ${
        hasSearch && showItems && isInteractiveSection ? styles.hasSearch : ''
      }`}
    >
      <div
        className={`${styles[`magneto-ui-filter-card_header`]} ${styles[showItems ? '--open' : '']}`}
        onClick={isInteractiveSection ? handleShowItems : undefined}
      >
        <p>{label}</p>
        {switchText && (
          <Switch title={switchText} setIsActive={(value) => console.log('Change isActive', value)} isActive />
        )}
        {isInteractiveSection && (
          <IconItem icon={ArrowDown2} size={16} className={styles[`magneto-ui-filter-card_header--arrow`]} />
        )}
      </div>

      {showItems && isInteractiveSection && hasSearch && (
        <div className={styles['magneto-ui-filter-card__search']}>
          <FilterSearchItem
            loading={props.loading}
            placeholder={searchPlaceholder as string}
            handleSearch={handleSearch}
          />
        </div>
      )}

      {showItems && <div className={styles['magneto-ui-filter-card_options']}>{optionsRendered}</div>}
    </article>
  )
}
