import React from 'react'
import { IconItem } from '../../../Icon'
import { IRadioButtonProps } from './RadioButton.interface'
import { classNames } from '@magneto365-ui/shared'
import styles from './RadioButton.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<IRadioButtonProps> = ({
  checked,
  children,
  childrenClassName,
  className,
  defaultChecked,
  disabled,
  id,
  onChange,
  prefixIcon,
  suffixIcon
}) => {
  return (
    <label
      className={cx(
        'radio-button',
        {
          'radio-button--checked': checked || defaultChecked,
          'radio-button--disabled': disabled
        },
        className
      )}
      htmlFor={id}
    >
      {prefixIcon && <IconItem size={18} {...prefixIcon} />}
      <input type="radio" disabled={disabled} id={id} checked={!!checked || !!defaultChecked} onChange={onChange} />
      {children && <span className={cx('radio-button__children', childrenClassName)}>{children}</span>}
      {suffixIcon && <IconItem size={18} {...suffixIcon} />}
    </label>
  )
}

/**
 * Atom UI component of radio button
 */
export const RadioButton = Component
