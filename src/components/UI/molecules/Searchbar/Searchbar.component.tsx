import React, { useState } from 'react'
import { MainButton } from '../../atoms'
import { ISearchbar } from './Searchbar.interface'
import { withStyles } from './Searchbar.styles'

const Component: React.FC<ISearchbar> = ({
  placeholder,
  onSearch,
  searchButtonProps,
  removeButtonProps,
  className
}) => {
  const [initialInput, setInitialInput] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSearch(searchValue)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!initialInput) {
      setInitialInput(event.target.value)
    }
    setSearchValue(event.target.value)
  }

  const handleClearSearch = () => {
    setSearchValue('')
    onSearch('')
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchValue} onChange={handleInputChange} placeholder={placeholder} />
        <div className="magneto-ui-searchbar-buttons">
          {searchValue && (
            <>
              <MainButton className="magneto-ui-remove-button" onClick={handleClearSearch} {...removeButtonProps} />
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
export const Searchbar = withStyles(Component)
