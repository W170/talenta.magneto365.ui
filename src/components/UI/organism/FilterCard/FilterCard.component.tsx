import React, { ChangeEvent, FC, Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { FilterSearchItem } from '@components/UI/molecules/FilterSearchItem'
import { FilterMenuItem } from '@components/UI/molecules/FilterMenuItem'
import { Switch } from '@components/UI/atoms/Switch'
import { ERenderType } from '@constants/stories'
import { IFilterValue } from '@components/UI/template'
import { IFilterCard } from './FilterCard.interface'
import styles from './FilterCard.module.scss'

export const FilterCard: FC<IFilterCard> = ({
  label,
  values,
  renderType,
  searchPlaceholder = '',
  switchText = '',
  setIsApplied,
  ...props
}) => {
  const [options, setOptions] = useState<IFilterValue[]>([])

  useEffect(() => {
    const appliedOptions = values.filter((opt) => opt.isApplied)
    const unAppliedOptions = values.filter((opt) => !opt.isApplied)
    setOptions([...appliedOptions, ...unAppliedOptions])
  }, [values])

  const hasSearch = useMemo(() => renderType === ERenderType.multiSelect, [renderType])
  const hasTotal = useMemo(() => !values.find((value) => value.isApplied), [values])

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      const appliedOptions = values.filter((opt) => opt.isApplied)
      const searchedOptions = values.filter((opt) => opt.label.toLowerCase().includes(event.target.value.toLowerCase()))
      setOptions([...appliedOptions, ...searchedOptions])
    },
    [values, setOptions]
  )

  if (!values.length) return <Fragment />

  return (
    <article className={`${styles['magneto-ui-filter-card']} ${hasSearch && styles.hasSearch}`}>
      <div className={styles['magneto-ui-filter-card_header']}>
        <p>{label}</p>
        {switchText && (
          <Switch title={switchText} setIsActive={(value) => console.log('Change isActive', value)} isActive />
        )}
      </div>

      {hasSearch && (
        <FilterSearchItem
          loading={props.loading}
          placeholder={searchPlaceholder as string}
          handleSearch={handleSearch}
        />
      )}
      <div className={styles['magneto-ui-filter-card_options']}>
        {options.map((opt, key) => {
          const optProps = { ...props, ...opt, hasTotal, setIsApplied, type: props.type }
          return <FilterMenuItem key={`${key}-${opt.label}`} {...optProps} />
        })}
      </div>
    </article>
  )
}
