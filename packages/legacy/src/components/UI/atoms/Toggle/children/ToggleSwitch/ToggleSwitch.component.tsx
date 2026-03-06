import React, { forwardRef } from 'react'
import { IToggleSwitch } from './ToggleSwitch.interface'
import { classNames } from '@shared/utils/common'
import styles from './ToggleSwitch.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = ({ className, ...props }: IToggleSwitch, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={cx('magneto-ui-toggle-switch', className)}>
      <input {...props} className={cx('magneto-ui-toggle-switch__input')} type="checkbox" ref={ref} />
      <div className={cx('magneto-ui-toggle-switch__track')}>
        <span className={cx('magneto-ui-toggle-switch__track-slider')} />
      </div>
    </div>
  )
}

const Component = forwardRef<HTMLInputElement, IToggleSwitch>(BaseComponent)

/**
 * Atom UI child component of Toggle.
 */
export const ToggleSwitch = Object.assign(Component, {})
