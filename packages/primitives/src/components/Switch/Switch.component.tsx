import React, { FC, useCallback, useEffect, useState } from 'react'
import { classNames } from '@magneto365-ui/shared'
import styles from './Switch.module.scss'
import { ISwitch } from './Switch.interface'

const cx = classNames.bind(styles)

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
    <div className={cx('switch_container', className)}>
      <label className={cx('switch')}>
        <input type="checkbox" onChange={handleChange} checked={checked} role="switch" />
        <span className={cx('slider', 'round')} />
      </label>
      {title && <p>{title}</p>}
    </div>
  )
}
