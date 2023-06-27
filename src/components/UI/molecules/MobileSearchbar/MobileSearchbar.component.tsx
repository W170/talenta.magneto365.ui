import React, { useEffect, useRef, useState } from 'react'
import { MainButton } from '../../atoms'
import { IMobileSearchbar } from './MobileSearchbar.interface'
import styles from './MobileSearchbar.modules.scss'

import { closeSearchMobileProps, searchMobileProps } from '../../../../constants/stories.constants'

const Component: React.FC<IMobileSearchbar> = ({
  termValue = '',
  onSearch,
  onClick,
  focusSearchInput,
  showMobileSearchbar
}) => {
  const [searchValue, setSearchValue] = useState(termValue)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    onSearch(searchValue)
    localStorage.setItem('searchValue', searchValue)
  }

  const handleClearSearch = () => {
    setSearchValue('')
    onSearch('')
    localStorage.removeItem('searchValue')
    if (onClick) onClick()
  }

  useEffect(() => {
    if (focusSearchInput) {
      searchInputRef.current?.focus()
    }
  }, [focusSearchInput])

  return (
    <div className={styles.MobileSearchbarComponent} data-show-mobile-searchbar={showMobileSearchbar}>
      <form onSubmit={handleSubmit}>
        <MainButton className={styles['magneto-ui-search-button']} {...searchMobileProps} />
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} ref={searchInputRef} />
        <MainButton
          className={styles['magneto-ui-remove-button']}
          onClick={handleClearSearch}
          {...closeSearchMobileProps}
        />
      </form>
    </div>
  )
}

/**
 * Molecule UI component for MobileSearchbar
 */

export const MobileSearchbar = Component
