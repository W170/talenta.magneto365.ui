import React, { FC, useCallback, useEffect, useState } from 'react'
import styles from './Switch.module.scss'
import { ISwitch } from './Switch.interface'

export const Switch: FC<ISwitch> = ({
  isActive = false,
  setIsActive = () => null,
  title = '',
  className = '',
  isDisabled = false
}) => {
  const [checked, setChecked] = useState(isActive)

  useEffect(() => {
    setChecked(isActive)
  }, [isActive])

  const handleChange = useCallback(() => {
    if (isDisabled) return
    setChecked((state) => !state)
    setIsActive(!isActive)
  }, [isDisabled, setIsActive, isActive])

  return (
    <div className={`${styles['magneto-ui-switch_container']} ${className}`}>
      <label className={styles['magneto-ui-switch']}>
        <input type="checkbox" onChange={handleChange} checked={checked} role="switch" />
        <span className={`${styles['magneto-ui-slider']} ${styles['magneto-ui-round']}`} />
      </label>
      {title && <p>{title}</p>}
    </div>
  )
}
