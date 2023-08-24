import React, { FC, useRef } from 'react'
import { SearchIcon } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'
import { IFilterSearchItem } from './FilterSearchItem.interface'
import styles from './FilterSearchItem.module.scss'

export const FilterSearchItem: FC<IFilterSearchItem> = ({ placeholder, disabled, loading, handleSearch }) => {
  const inputRef = useRef(null)

  if (loading)
    return (
      <div className={styles.skeleton}>
        <IconItem icon={SearchIcon} size={17} />
      </div>
    )

  return (
    <div className={`${styles['magneto-ui-filter-search']} ${disabled ? styles.disabled : ''}`}>
      <IconItem icon={SearchIcon} size={17} />
      <input
        ref={inputRef}
        type="search"
        placeholder={placeholder}
        onChange={(event) => handleSearch(event, inputRef)}
        disabled={disabled}
      />
    </div>
  )
}

FilterSearchItem.defaultProps = {
  disabled: false
}
