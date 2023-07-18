import React, { FC, useMemo, useState } from 'react'
import { IFilterCard } from './FilterCard.interface'
import styles from './FilterCard.module.scss'
import { Switch } from '@components/UI/atoms/Switch'
import { FilterSearchItem } from '@components/UI/molecules/FilterSearchItem'
import { FilterMenuItem } from '@components/UI/molecules/FilterMenuItem'

export const FilterCard: FC<IFilterCard> = ({ title, totalOptions, hasSwitch, switchText, searchPlaceholder }) => {
  const [options, setOptions] = useState(totalOptions)

  const hasSearch = useMemo(() => totalOptions.length > 7, [totalOptions])
  return (
    <article className={styles['magneto-ui-filter-card']}>
      <div className={styles['magneto-ui-filter-card_header']}>
        <p>{title}</p>
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
        <FilterSearchItem options={totalOptions} setOptions={setOptions} placeholder={searchPlaceholder as string} />
      )}
      {options.map((opt, key) => (
        <FilterMenuItem
          //TODO: review isSelected, setIsSelected and amount
          key={`${key}`}
          {...opt}
          isSelected={false}
          setIsSelected={(value) => console.log('Change isSelected', value)}
        />
      ))}
    </article>
  )
}

FilterCard.defaultProps = {
  searchPlaceholder: ''
}
