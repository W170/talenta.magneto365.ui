import React from 'react'
import { ArrowRight2 } from 'iconsax-react'
import { IMenuItem } from './MenuItem.interface'
import style from './menuItems.module.scss'

const MenuItem: React.FC<IMenuItem> = ({ url = '#', text = '', isActive }) => {
  const menuActive = isActive ? style['is-active'] : ''
  return (
    <div>
      <a href={url} className={`${style['magneto-ui-menu-item']} ${menuActive}`}>
        <ArrowRight2 color="black" />
        <p>{text}</p>
      </a>
    </div>
  )
}

export default MenuItem
