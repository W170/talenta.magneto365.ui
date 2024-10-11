import React from 'react'
import { IconItem } from '../Icon'
import { IButton } from './Button.interface'
import styles from './Button.module.scss'

const Component: React.FC<IButton> = ({
  buttonText,
  buttonTitle,
  addHover,
  onClick,
  suffixIcon,
  prefixIcon,
  className,
  iconSize = 20
}) => {
  return (
    <button
      className={`${className} ${styles['magneto-ui-button']} ${addHover ? styles['hover-effect'] : ''} `}
      type="button"
      onClick={onClick}
      title={buttonTitle}
    >
      {suffixIcon && (
        <IconItem size={iconSize} icon={suffixIcon} hover={addHover} className={styles['magneto-ui-button__icon']} />
      )}
      {buttonText && <p className={styles['magneto-ui-button__mobile-text']}>{buttonText}</p>}
      {prefixIcon && (
        <IconItem size={iconSize} icon={prefixIcon} hover={addHover} className={styles['magneto-ui-button__icon']} />
      )}
    </button>
  )
}

/**
 * UI Atom Component of Save Button
 */

export const Button = Component