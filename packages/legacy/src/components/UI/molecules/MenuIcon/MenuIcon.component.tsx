import React from 'react'
import { IconItem } from '../../atoms'
import { IMenuIcon } from './MenuIcon.interface'
import style from './menuIcon.module.scss'

const Component: React.FC<IMenuIcon> = ({
  text,
  icon,
  iconProps,
  iconSize = 20,
  url,
  type = 'link',
  onClick,
  isActive,
  className = '',
  rel,
  target
}) => {
  const menuActive = isActive ? style['isActive'] : ''

  return (
    <>
      {type === 'link' ? (
        <a
          href={url}
          className={`${style['magneto-ui-menu-icon']} ${menuActive} ${className}`}
          title={text}
          rel={rel}
          target={target}
        >
          {icon && <IconItem size={iconSize} hover={false} icon={icon} {...iconProps} />}
          <p className={style['magneto-ui-menu-icon__menu-text']}>{text}</p>
        </a>
      ) : (
        <button
          onClick={onClick}
          className={`${style['magneto-ui-menu-icon']} ${menuActive} ${className}`}
          title={text}
        >
          {icon && <IconItem size={iconSize} hover={false} icon={icon} {...iconProps} />}
          <p className={style['magneto-ui-menu-icon__menu-text']}>{text}</p>
        </button>
      )}
    </>
  )
}

export const MenuIcon = Component
