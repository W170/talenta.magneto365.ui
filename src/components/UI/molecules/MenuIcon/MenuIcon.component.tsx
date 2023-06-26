import React, { useMemo } from 'react'
import { IconItem } from '../../atoms'
import { IMenuIcon } from './MenuIcon.interface'
import style from './menuIcon.module.scss'

const Component: React.FC<IMenuIcon> = ({ text, Icon, url, type = 'link', onClick, isActive, assetsIcon }) => {
  const menuActive = isActive ? style['isActive'] : ''
  const hasIcon = useMemo(() => Icon || assetsIcon, [Icon, assetsIcon])
  return (
    <>
      {type === 'link' ? (
        <a href={url} className={`${style['magneto-ui-menu-icon']} ${menuActive}`}>
          {hasIcon && <IconItem size={20} hover={false} Icon={Icon} assetsIcon={assetsIcon} />}
          <p className={style['magneto-ui-menu-text']}>{text}</p>
        </a>
      ) : (
        <button onClick={onClick} className={`${style['magneto-ui-menu-icon']} ${menuActive}`}>
          {hasIcon && <IconItem size={20} hover={false} Icon={Icon} assetsIcon={assetsIcon} />}
          <p className={style['magneto-ui-menu-text']}>{text}</p>
        </button>
      )}
    </>
  )
}

export const MenuIcon = Component
