import React from 'react'
import { IconItem } from '../../atoms'
import { DrawerPortal } from './DrawerPortal'
import { IDrawer } from './Drawer.interface'
import { Add } from 'iconsax-react'
import style from './drawer.module.scss'

const Component: React.FC<IDrawer> = ({ children, onClose, isOpen }) => {
  const showDrawer = isOpen ? 'show' : 'hidden'
  return (
    <DrawerPortal>
      <div className={`${style['magneto-ui-drawer']} ${style[showDrawer]}`}>
        <aside className={`${style[showDrawer]}`}>
          <button className={style['magneto-ui-close-button']} onClick={onClose}>
            <IconItem Icon={Add} hover={false} />
          </button>
          {children}
        </aside>
        {isOpen && <span className={style['background-drawer']} onClick={onClose} />}
      </div>
    </DrawerPortal>
  )
}

/**
 * Molecule UI component for Drawer
 */

export const Drawer = Component
