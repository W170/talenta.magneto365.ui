import React from 'react'
import { IconItem } from '../../atoms'
import { IMenuIcon } from './MenuIcon.interface'
import style from './menuIcon.module.scss'

const Component: React.FC<IMenuIcon> = ({ text, icon, url, type = 'link', onClick, isActive, className = '' }) => {
  const menuActive = isActive ? style['isActive'] : ''

  return (
    <>
      {type === 'link' ? (
        <a href={url} className={`${style['magneto-ui-menu-icon']} ${menuActive} ${className}`} title={text}>
          {icon && <IconItem size={20} hover={false} icon={icon} />}
          <p className={style['magneto-ui-menu-text']}>{text}</p>
        </a>
      ) : (
        <button
          onClick={onClick}
          className={`${style['magneto-ui-menu-icon']} ${menuActive} ${className}`}
          title={text}
        >
          {icon && <IconItem size={20} hover={false} icon={icon} />}
          <p className={style['magneto-ui-menu-text']}>{text}</p>
        </button>
      )}
    </>
  )
}

export const MenuIcon = Component
