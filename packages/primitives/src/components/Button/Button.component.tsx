import React from 'react'
import { classNames } from '@magneto365-ui/shared'
import { IconItem } from '../Icon'
import { IButton } from './Button.interface'
import styles from './Button.module.scss'

const cn = classNames.bind(styles)

const Component: React.FC<IButton> = ({
  buttonText,
  buttonTitle,
  addHover,
  onClick,
  suffixIcon,
  prefixIcon,
  className,
  iconSize = 20,
  type = 'button',
  disabled = false
}) => {
  return (
    <button
      className={cn('magneto-ui-button', { 'magneto-ui-button-hover-effect': addHover }, className)}
      type={type}
      onClick={onClick}
      title={buttonTitle}
      disabled={disabled}
    >
      {typeof suffixIcon === 'string' ? (
        <IconItem size={iconSize} icon={suffixIcon} hover={addHover} className={cn('magneto-ui-button__icon')} />
      ) : (
        suffixIcon
      )}
      {buttonText && <p className={cn('magneto-ui-button__mobile-text')}>{buttonText}</p>}
      {typeof prefixIcon === 'string' ? (
        <IconItem size={iconSize} icon={prefixIcon} hover={addHover} className={cn('magneto-ui-button__icon')} />
      ) : (
        prefixIcon
      )}
    </button>
  )
}

/**
 * UI Atom Component of Save Button
 */

export const Button = Component
