import React, { useState } from 'react'
import { MainButton } from '../../atoms'
import { ISearchbar } from './Searchbar.interface'
import { withStyles } from './Searchbar.styles'
import { removePropsButton, searchPropsButton } from '../../../../constants/stories.constants'

const Component: React.FC<ISearchbar> = ({ placeholder, onSearch, className }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    onSearch(searchValue)
  }

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchValue(event.target.value)
  }

  const handleClearSearch = () => {
    // Add a logic that clears the searchbar and calls the onSearch function with an empty string
    setSearchValue('')
    console.log(searchValue)
    onSearch('')
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchValue} onChange={handleInputChange} placeholder={placeholder} />
        <div className="magneto-ui-searchbar-buttons">
          {searchValue && (
            <>
              <MainButton className="magneto-ui-remove-button" onClick={handleClearSearch} {...removePropsButton} />
              <span>|</span>
            </>
          )}
          <MainButton {...searchPropsButton} />
        </div>
      </form>
    </div>
  )
}
/**
 * UI Molecule of a searchbar
 */
export const Searchbar = withStyles(Component)
