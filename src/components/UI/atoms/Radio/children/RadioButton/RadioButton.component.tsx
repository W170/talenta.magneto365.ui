import React from 'react'
import { IconItem } from '@components/UI/atoms/Icon'
import { IRadioButtonProps } from './RadioButton.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './RadioButton.module.scss'

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
      className={CNM.get({
        styles,
        cls: [
          'radio-button',
          (checked || defaultChecked) && 'radio-button--checked',
          disabled && 'radio-button--disabled',
          className
        ]
      })}
      htmlFor={id}
    >
      {prefixIcon && <IconItem size={18} {...prefixIcon} />}
      <input type="radio" disabled={disabled} id={id} checked={checked || defaultChecked} onChange={onChange} />
      {children && (
        <span className={CNM.get({ styles, cls: ['radio-button__children', childrenClassName] })}>{children}</span>
      )}
      {suffixIcon && <IconItem size={18} {...suffixIcon} />}
    </label>
  )
}

/**
 * Atom UI component of radio button
 */
export const RadioButton = Component
