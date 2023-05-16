import React, { useEffect, useRef, useState } from 'react'
import { IMobileSearchbar } from './MobileSearchbar.interface'
import { withStyles } from './MobileSearchbar.styles'
import { MainButton } from '../../atoms/MainButton'

const Component: React.FC<IMobileSearchbar> = ({ openProps, infoProps, closeProps, className }) => {
  const [searchValue, setSearchValue] = useState('')
  const [showForm, setShowForm] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchValue(event.target.value)
  }

  const openForm = () => {
    setShowForm(!showForm)
  }

  const closeForm = () => {
    setShowForm(!showForm)
  }

  useEffect(() => {
    if (showForm && inputRef.current) {
      inputRef.current.focus()
    }
  }, [showForm])

  return (
    <div className={className}>
      <div className="toggle-button">
        <MainButton onClick={openForm} {...openProps} />
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <MainButton {...infoProps} />
          <input type="text" value={searchValue} onChange={handleInputChange} ref={inputRef} />
          <MainButton onClick={closeForm} {...closeProps} className="close-button" />
        </form>
      )}
    </div>
  )
}

/**
 * Molecule UI component for MobileSearchbar
 */

export const MobileSearchbar = withStyles(Component)
