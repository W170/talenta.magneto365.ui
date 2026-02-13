import React from 'react'
import { IRadioDefaultProps } from './RadioDefault.interface'
import { classNames } from '@magneto365-ui/shared'
import styles from './RadioDefault.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<IRadioDefaultProps> = ({
  checked,
  children,
  childrenClassName,
  className,
  defaultChecked,
  disabled,
  id,
  indicatorClassName,
  onChange
}) => {
  return (
    <label className={cx('radio-default', { 'radio-default--disabled': disabled }, className)} htmlFor={id}>
      <input type="radio" id={id} disabled={disabled} checked={!!checked || !!defaultChecked} onChange={onChange} />
      <div
        className={cx(
          'radio-default__indicator',
          {
            'radio-default__indicator--checked': checked || defaultChecked
          },
          indicatorClassName
        )}
      />
      {children && <span className={cx('radio-default__label', childrenClassName)}>{children}</span>}
    </label>
  )
}

/**
 * Molecule UI component for radio default
 */
export const RadioDefault = Component
