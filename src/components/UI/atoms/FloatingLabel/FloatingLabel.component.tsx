import React, { useState } from 'react'
import { IFloatingLabel } from '@components/UI/atoms/FloatingLabel/FloatingLabel.interface'
import styles from './FloatingLabel.module.scss'

const Component: React.FC<IFloatingLabel> = ({ children, label, value }) => {
  const [isFocused, setIsFocused] = useState(false)
  const labelClass = `label${isFocused || (value && value.length !== 0) ? '-float' : ''}`

  console.log(labelClass)

  return (
    <div className={styles['float-label']} onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)}>
      {children}
      <div className={styles[`${labelClass}`]}>{label}</div>
    </div>
  )
}

export const FloatingLabel = Component
