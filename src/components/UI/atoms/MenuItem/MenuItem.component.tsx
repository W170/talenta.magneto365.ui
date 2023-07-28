import React from 'react'
import { IMenuItem } from './MenuItem.interface'
import style from './menuItems.module.scss'
import { IconItem } from '../Icon'
import { ArrowRight2 } from '../../../../constants/icons.constants'

const MenuItem: React.FC<IMenuItem> = ({ url = '#', text = '', isActive }) => {
  const menuActive = isActive ? style['is-active'] : ''
  return (
    <div>
      <a href={url} className={`${style['magneto-ui-menu-item']} ${menuActive}`}>
        <IconItem icon={ArrowRight2} hover={false} />
        <p>{text}</p>
      </a>
    </div>
  )
}

export default MenuItem
