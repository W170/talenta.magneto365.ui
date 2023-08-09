import React from 'react'
import { IconItem } from '../../atoms'
import { DrawerPortal } from './DrawerPortal'
import { IDrawer } from './Drawer.interface'
import style from './drawer.module.scss'
import { Add } from '../../../../constants/icons.constants'

const DEFAULT_PADDING = 20

const Component: React.FC<IDrawer> = ({
  children,
  onClose,
  isOpen,
  direction = 'left',
  customPadding,
  hideButton,
  isMobile
}) => {
  const showDrawer = isOpen ? `show-${direction}` : `hidden-${direction}`
  const paddingValue = customPadding !== undefined ? `${customPadding}px` : `${DEFAULT_PADDING}px`
  const backgroundEffect = isMobile ? 'no-background' : 'background-drawer'

  return (
    <DrawerPortal>
      <div className={`${style['magneto-ui-drawer']}`}>
        <aside className={`${style[showDrawer]}`} style={{ padding: paddingValue }}>
          {!hideButton && (
            <button className={style['magneto-ui-close-button']} onClick={onClose}>
              <IconItem icon={Add} hover={false} />
            </button>
          )}
          {children}
        </aside>
        {isOpen && <span className={`${style[backgroundEffect]}`} onClick={onClose} />}
      </div>
    </DrawerPortal>
  )
}

/**
 * Molecule UI component for Drawer
 */

export const Drawer = Component
