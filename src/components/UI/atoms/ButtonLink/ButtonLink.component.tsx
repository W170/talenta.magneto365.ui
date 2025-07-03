import React, { useCallback } from 'react'
import { IconItem } from '../Icon'
import styles from './ButtonLink.module.scss'
import { IButtonLink } from './ButtonLink.interface'

const Component: React.FC<IButtonLink> = ({
  buttonText,
  onClick,
  suffixIcon,
  prefixIcon,
  className,
  iconSize = 20,
  href,
  rel,
  target,
  title
}) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (onClick) {
        event.preventDefault()
        onClick()
      }
    },
    [onClick]
  )

  return (
    <a
      className={`${className ? className : styles['button-link']}`}
      type="button"
      onClick={handleClick}
      href={href}
      rel={rel}
      target={target}
      title={title}
    >
      {suffixIcon && (
        <IconItem size={iconSize} icon={suffixIcon} hover={true} className={styles['button-link__icon']} />
      )}
      {buttonText && <p className={styles['button-link__text']}>{buttonText}</p>}
      {prefixIcon && (
        <IconItem size={iconSize} icon={prefixIcon} hover={true} className={styles['button-link__icon']} />
      )}
    </a>
  )
}

/**
 * UI Atom Component of Save Button
 */

export const ButtonLink = Component
