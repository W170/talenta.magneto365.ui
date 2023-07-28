import React from 'react'
import { IconItem } from '../../atoms'
import { DrawerPortal } from './DrawerPortal'
import { IDrawer } from './Drawer.interface'
import style from './drawer.module.scss'
import { Add } from '../../../../constants/icons.constants'

const Component: React.FC<IDrawer> = ({ children, onClose, isOpen }) => {
  const showDrawer = isOpen ? 'show' : 'hidden'
  return (
    <DrawerPortal>
      <div className={`${style['magneto-ui-drawer']}`}>
        <aside className={`${style[showDrawer]}`}>
          <button className={style['magneto-ui-close-button']} onClick={onClose}>
            <IconItem icon={Add} hover={false} />
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
