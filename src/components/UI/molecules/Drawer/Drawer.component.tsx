import React from 'react'
import { IconItem } from '../../atoms'
import { DrawerPortal } from './DrawerPortal'
import { IDrawer } from './Drawer.interface'
import { withStyles } from './Drawer.styles'
import { Add } from 'iconsax-react'

const Component: React.FC<IDrawer> = ({ className, children, onClose, isOpen }) => {
  return (
    <DrawerPortal>
      <div className={className}>
        <aside>
          <button className="magneto-ui-close-button" onClick={onClose}>
            <IconItem Icon={Add} hover={false} />
          </button>
          {children}
        </aside>
        {isOpen && <span onClick={onClose} />}
      </div>
    </DrawerPortal>
  )
}

/**
 * Molecule UI component for Drawer
 */

export const Drawer = withStyles(Component)
