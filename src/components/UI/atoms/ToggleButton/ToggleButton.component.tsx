import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { IToggleButton } from './ToggleButton.interface'
import { classMUI } from '@constants/stories'
import styles from './ToggleButton.module.scss'

const Component: React.FC<IToggleButton> = ({ className, color, onChange, id, name, defaultValue }) => {
  const [isSelected, setIsSelected] = useState<string>('')

  const isColorDark = (color: string) => {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    const luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b

    return luminosity < 128
  }

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
    const textColor = isColorDark(color || '#FFFFFF') ? '#FFFFFF' : '#000000'

    if (isSelected) {
      return {
        backgroundColor: color || '#F0F1F3',
        color: textColor
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
