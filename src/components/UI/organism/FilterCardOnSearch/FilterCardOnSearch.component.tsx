import React, { FC, useEffect, useState } from 'react'
import { Switch } from '@components/UI/atoms/Switch'
import { FilterSearchItem } from '@components/UI/molecules/FilterSearchItem'
import { IFilterCard } from '../FilterCard'
import styles from './FilterCardOnSearch.module.scss'
import { IFilterValue } from '@components/UI/template'

export const FilterCardOnSearch: FC<IFilterCard> = ({
  label,
  values,
  hasSwitch,
  switchText,
  searchPlaceholder,
  child
  // ...props
}) => {
  const [options, setOptions] = useState<IFilterValue[]>([])

  useEffect(() => {
    setOptions(values)
  }, [values])

  return (
    <article className={`${styles['magneto-ui-filter-onSearch']} ${styles.hasSearch}`}>
      <div className={styles['magneto-ui-filter-onSearch_header']}>
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

      <FilterSearchItem options={values} setOptions={setOptions} placeholder={searchPlaceholder as string} />
      {/* //TODO: delete this */}
      {options.map((opt) => (
        <p key={JSON.stringify(opt)}>{JSON.stringify(opt)}</p>
      ))}
      {/* <div className={styles['magneto-ui-filter-onSearch_options']}> 
         {options.map((opt, key) => {
          const optProps = { ...props, ...opt }
          return (
            <FilterMenuItem
            //TODO: review isSelected, setIsApplied and amount
            key={`${key}`}
            {...optProps}
            isSelected={false}
            setIsApplied={(value) => console.log('Change id is: ', value)}
            />
            )
          })} 
       </div> */}
      {child && <FilterCardOnSearch {...(child as unknown as IFilterCard)} />}
    </article>
  )
}

FilterCardOnSearch.defaultProps = {
  searchPlaceholder: '',
  hasSwitch: false,
  switchText: ''
}
