import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { IToggleButton } from './ToggleButton.interface'
import { classMUI } from '@constants/stories'
import styles from './ToggleButton.module.scss'

const Component: React.FC<IToggleButton> = ({ className, color, onChange, id, name, defaultValue }) => {
  const [isSelected, setIsSelected] = useState<string>('')

  useEffect(() => {
    if (defaultValue && defaultValue.includes(id.toString())) {
      setIsSelected(defaultValue)
      return
    }
    setIsSelected('')
  }, [defaultValue, id])

  const handleClick = useCallback(
    ({ id, name }) => {
      if (isSelected) {
        setIsSelected('')
        onChange({ id, name: undefined })
        return
      }
      onChange({ id, name })
      setIsSelected(id.toString())
    },
    [isSelected, onChange]
  )

  const selectStyles = useMemo(() => {
    if (isSelected) {
      return {
        backgroundColor: color || '#F0F1F3'
      }
    }
    return {
      backgroundColor: 'transparent',
      border: `${color || '#E3E7E9'} solid 1px`
    }
  }, [color, isSelected])

  return (
    <button
      className={`${styles[`${classMUI}-toggle-button`]} ${className || ''} ${
        isSelected ? styles['toggle-button-selected'] : ''
      }`}
      style={{ ...selectStyles }}
      onClick={() => handleClick({ id, name })}
      type="button"
    >
      {name}
    </button>
  )
}

export const ToggleButton = Component
