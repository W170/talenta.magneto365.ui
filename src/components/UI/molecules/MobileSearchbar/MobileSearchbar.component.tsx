import React, { useState } from 'react'
import { IMobileSearchbar } from './MobileSearchbar.interface'
import { withStyles } from './MobileSearchbar.styles'
import { MainButton } from '../../atoms/MainButton'

const Component: React.FC<IMobileSearchbar> = ({ toggleProps, searchProps, removeProps, onSearch, className }) => {
  const [searchValue, setSearchValue] = useState('')
  const [showForm, setShowForm] = useState(false)

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

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className={className}>
      <div className="toggle-button">
        <MainButton onClick={toggleForm} {...toggleProps} />
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <MainButton {...searchProps} />
          <input type="text" value={searchValue} onChange={handleInputChange} />
          <MainButton onClick={handleClearSearch} {...removeProps} />
        </form>
      )}
    </div>
  )
}

/**
 * Molecule UI component for MobileSearchbar
 */

export const MobileSearchbar = withStyles(Component)
