import React, { useState } from 'react'
import { IMobileSearchbar } from './MobileSearchbar.interface'
import { withStyles } from './MobileSearchbar.styles'
import { MainButton } from '../../atoms/MainButton'

const Component: React.FC<IMobileSearchbar> = ({ onClick, infoProps, closeProps, className }) => {
  const [searchValue, setSearchValue] = useState('')
  // const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <MainButton {...infoProps} />
        <input type="text" value={searchValue} onChange={handleInputChange} />
        <MainButton onClick={onClick} {...closeProps} className="close-button" />
      </form>
    </div>
  )
}

/**
 * Molecule UI component for MobileSearchbar
 */

export const MobileSearchbar = withStyles(Component)
