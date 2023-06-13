import React, { useEffect, useRef, useState } from 'react'
import { MainButton } from '../../atoms'
import { IMobileSearchbar } from './MobileSearchbar.interface'
import { withStyles } from './MobileSearchbar.styles'
import { closeSearchMobileProps, searchMobileProps } from '../../../../constants/stories.constants'

const Component: React.FC<IMobileSearchbar> = ({ onSearch, onClick, focusSearchInput, className, termValue = '' }) => {
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
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <MainButton {...searchMobileProps} />
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} ref={searchInputRef} />
        <MainButton onClick={handleClearSearch} {...closeSearchMobileProps} className="close-button" />
      </form>
    </div>
  )
}

/**
 * Molecule UI component for MobileSearchbar
 */

export const MobileSearchbar = withStyles(Component)
