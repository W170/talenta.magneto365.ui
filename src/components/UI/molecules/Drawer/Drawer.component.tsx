import React from 'react'
import { CloseCircle } from 'iconsax-react'
import { IconItem } from '../../atoms/Icon'
import { IDrawer } from './Drawer.interface'
import { withStyles } from './Drawer.styles'
import { DrawerPortal } from './DrawerPortal'

const Component: React.FC<IDrawer> = ({ className, children, onClose, isOpen }) => {
  return (
    <DrawerPortal>
      <div className={className}>
        <div>
          <button onClick={onClose}>
            <IconItem Icon={CloseCircle} hover={false} />
          </button>
          {children}
        </div>
        {isOpen && <span onClick={onClose} />}
      </div>
    </DrawerPortal>
  )
}

/**
 * Molecule UI component for Drawer
 */

export const Drawer = withStyles(Component)
