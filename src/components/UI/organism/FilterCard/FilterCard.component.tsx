import React, { FC, Fragment, useEffect, useMemo, useState } from 'react'
import { IFilterCard } from './FilterCard.interface'
import styles from './FilterCard.module.scss'
import { Switch } from '@components/UI/atoms/Switch'
import { FilterSearchItem } from '@components/UI/molecules/FilterSearchItem'
import { FilterMenuItem } from '@components/UI/molecules/FilterMenuItem'
import { IFilterValue } from '@components/UI/template'
import { ERenderType } from '@components/UI/template/SideFilter/SideFilter.component'

export const FilterCard: FC<IFilterCard> = ({
  label,
  values,
  hasSwitch,
  switchText,
  searchPlaceholder,
  setIsApplied,
  renderType,
  ...props
}) => {
  const [options, setOptions] = useState<IFilterValue[]>([])

  useEffect(() => {
    setOptions(values)
  }, [values])

  const hasSearch = useMemo(() => renderType === ERenderType.multiSelect, [renderType])
  const hasTotal = useMemo(() => !values.find((value) => value.isApplied), [values])

  if (!values.length) return <Fragment />

  return (
    <article className={`${styles['magneto-ui-filter-card']} ${hasSearch && styles.hasSearch}`}>
      <div className={styles['magneto-ui-filter-card_header']}>
        <p>{label}</p>
        {hasSwitch && (
          <Switch
            //TODO: review isActive, setIsActive
            title={switchText}
            setIsActive={(value) => console.log('Change isActive', value)}
            isActive
          />
        )}
      </div>
      {hasSearch && (
        <FilterSearchItem options={values} setOptions={setOptions} placeholder={searchPlaceholder as string} />
      )}
      <div className={styles['magneto-ui-filter-card_options']}>
        {options.map((opt, key) => {
          const optProps = { ...props, ...opt, hasTotal }
          return <FilterMenuItem key={`${key}`} {...optProps} setIsApplied={setIsApplied} />
        })}
      </div>
    </article>
  )
}

FilterCard.defaultProps = {
  searchPlaceholder: '',
  hasSwitch: false,
  switchText: ''
}
