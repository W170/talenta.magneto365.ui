import React, { FC, useCallback, useState } from 'react'
import styles from './Switch.module.scss'
import { ISwitch } from './Switch.interface'

export const Switch: FC<ISwitch> = ({ isActive, setIsActive, title, className }) => {
  const [checked, setChecked] = useState(isActive)
  //TODO review is internal state is necessary

  const handleChange = useCallback(() => {
    setChecked((state) => !state)
    setIsActive(!isActive)
  }, [setIsActive, isActive])

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

Switch.defaultProps = {
  className: ''
}
