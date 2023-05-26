import React, { useEffect, useRef, useState } from 'react'
import { MainButton } from '../../atoms'
import { IMobileSearchbar } from './MobileSearchbar.interface'
import { withStyles } from './MobileSearchbar.styles'

const Component: React.FC<IMobileSearchbar> = ({
  searchProps,
  closeProps,
  onSearch,
  onClick,
  focusSearchInput,
  className
}) => {
  const [searchValue, setSearchValue] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    onSearch(searchValue)
  }

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    if (focusSearchInput) {
      searchInputRef.current?.focus()
    }
  }, [focusSearchInput])

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <MainButton {...searchProps} />
        <input type="text" value={searchValue} onChange={handleInputChange} ref={searchInputRef} />
        <MainButton onClick={onClick} {...closeProps} className="close-button" />
      </form>
    </div>
  )
}

/**
 * Molecule UI component for MobileSearchbar
 */

export const MobileSearchbar = withStyles(Component)
