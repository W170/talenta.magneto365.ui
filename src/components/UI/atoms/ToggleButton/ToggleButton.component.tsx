import React, { useCallback, useMemo, useState } from 'react'
import { IToggleButton } from './ToggleButton.interface'
import { classMUI } from '@constants/stories'
import styles from './ToggleButton.module.scss'

const Component: React.FC<IToggleButton> = ({
  className,
  color = 'blue',
  onChange,
  id,
  name,
  currentSelect,
  baseColor = 'transparent'
}) => {
  const [isSelected, setIsSelected] = useState<string>('')

  const isColorDark = (color: string) => {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    const luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b

    return luminosity < 128
  }

  const handleClick = useCallback(
    ({ id, name }) => {
      if (isSelected || currentSelect) {
        setIsSelected('')
        onChange({ id, name: undefined })
        return
      }
      onChange({ id, name })
      setIsSelected(id.toString())
    },
    [currentSelect, isSelected, onChange]
  )

  const selectStyles = useMemo(() => {
    if (isSelected || currentSelect) {
      return {
        backgroundColor: color,
        color: isColorDark(color || '#FFFFFF') ? '#FFFFFF' : '#000000',
        border: 'none'
      }
    }
    return {
      backgroundColor: baseColor,
      color: isColorDark(baseColor || '#FFFFFF') ? '#FFFFFF' : '#000000'
    }
  }, [baseColor, color, currentSelect, isSelected])

  return (
    <button
      className={`${styles[`${classMUI}-toggle-button`]} ${className || ''} ${
        isSelected || currentSelect ? styles['toggle-button-selected'] : ''
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
