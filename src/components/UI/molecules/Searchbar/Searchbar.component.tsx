import React, { useState } from 'react'
import { MainButton } from '../../atoms'
import { ISearchbar } from './Searchbar.interface'
import { withStyles } from './Searchbar.styles'

const Component: React.FC<ISearchbar> = ({ placeholder, searchProps, removeProps, onSearch, className }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    onSearch(searchValue)
  }

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchValue(event.target.value)
  }

  const handleClearSearch = () => {
    setSearchValue('')
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchValue} onChange={handleInputChange} placeholder={placeholder} />
        <div className="magneto-ui-searchbar-buttons">
          {searchValue && (
            <>
              <MainButton className="magneto-ui-remove-button" onClick={handleClearSearch} {...removeProps} />
              <span>|</span>
            </>
          )}
          <MainButton {...searchProps} />
        </div>
      </form>
    </div>
  )
}
/**
 * UI Molecule of a searchbar
 */
export const Searchbar = withStyles(Component)
