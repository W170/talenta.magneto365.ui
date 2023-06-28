import React, { useState } from 'react'
import { MainButton } from '../../atoms'
import { ISearchbar } from './Searchbar.interface'
import styles from './Searchbar.modules.scss'

const Component: React.FC<ISearchbar> = ({
  placeholder,
  onSearch,
  searchButtonProps,
  removeButtonProps,
  termValue
}) => {
  const [searchValue, setSearchValue] = useState(termValue)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSearch(searchValue)
    localStorage.setItem('searchValue', searchValue)
  }

  const handleClearSearch = () => {
    setSearchValue('')
    onSearch('')
    localStorage.removeItem('searchValue')
  }

  return (
    <div className={styles.SearchbarComponent}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={placeholder}
        />
        <div className={styles['magneto-ui-searchbar-buttons']}>
          {searchValue && (
            <>
              <MainButton
                className={styles['magneto-ui-remove-button']}
                onClick={handleClearSearch}
                {...removeButtonProps}
              />
              <span>|</span>
            </>
          )}
          <MainButton {...searchButtonProps} />
        </div>
      </form>
    </div>
  )
}

/**
 * UI Molecule of a searchbar
 */
export const Searchbar = Component
