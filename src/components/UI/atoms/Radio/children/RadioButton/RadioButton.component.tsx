import React from 'react'
import { IRadioButtonProps } from './RadioButton.interface'
import { useMediaQuery } from '@components/hooks'
import { IconItem } from '@components/UI/atoms/Icon'
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
  const prefix = useMediaQuery(prefixIcon && <IconItem size={18} {...prefixIcon} />)

  const suffix = useMediaQuery(suffixIcon && <IconItem size={18} {...suffixIcon} />)

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
      {prefix}
      <input type="radio" disabled={disabled} id={id} checked={checked || defaultChecked} onChange={onChange} />
      {children && (
        <span className={CNM.get({ styles, cls: ['radio-button__children', childrenClassName] })}>{children}</span>
      )}
      {suffix}
    </label>
  )
}

/**
 * Atom UI component of radio button
 */
export const RadioButton = Component
