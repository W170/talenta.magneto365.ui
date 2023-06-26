import React from 'react'
import { IconItem } from '../../atoms'
import { DrawerPortal } from '../Drawer/DrawerPortal'
import { IMoblieDrawer } from './MobileDrawer.interface'
import { Add } from 'iconsax-react'
import style from './mobileDrawer.module.scss'

const Component: React.FC<IMoblieDrawer> = ({ onClose, isOpen, children }) => {
  const showMenu = isOpen ? 'show' : 'hidden'
  return (
    <DrawerPortal>
      <div className={`${style['magneto-ui-mobile-drawer']}`}>
        <aside className={style[showMenu]}>
          <button className={style['magneto-ui-close-button']} onClick={onClose}>
            <IconItem Icon={Add} hover={false} />
          </button>
          {children}
        </aside>
        {isOpen && <span className={`${style['background-drawer']}`} onClick={onClose} />}
      </div>
    </DrawerPortal>
  )
}
/**
 * Molecule UI component for Mobile Drawer
 */
export const MobileDrawer = Component
