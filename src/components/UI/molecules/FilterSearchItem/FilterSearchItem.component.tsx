import React, { ChangeEvent, FC, useCallback } from 'react'
import { IFilterSearchItem } from './FilterSearchItem.interface'
import styles from './FilterSearchItem.module.scss'
import { IconItem } from '@components/UI/atoms'
import searchIcon from '@assets/SearchNormal1Gray.svg' //TODO: change this import for constant import

export const FilterSearchItem: FC<IFilterSearchItem> = ({ options, setOptions, placeholder }) => {
  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setOptions(options.filter((opt) => opt.label.toLowerCase().includes(event.target.value.toLowerCase())))
      //   setOptions(options.filter((opt) => new RegExp(event.target.value, 'i').test(opt.label)))
    },
    [options, setOptions]
  )

  return (
    <div className={styles['magneto-ui-filter-search']}>
      <IconItem Icon={searchIcon} size={17} />
      <input type="search" placeholder={placeholder} onChange={handleSearch} />
    </div>
  )
}
