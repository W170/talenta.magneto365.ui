import { CloseCircle } from 'iconsax-react'
import React from 'react'
import { IconItem } from '../../atoms/Icon'
import { IDrawer } from './Drawer.interface'
import { withStyles } from './Drawer.styles'

const Component: React.FC<IDrawer> = ({ className, isOpen = false, children, onClose }) => {
  return (
    <div className={className}>
      <div>
        <button onClick={onClose}>
          <IconItem Icon={CloseCircle} hover={false} />
        </button>
        {children}
      </div>
      {isOpen && <span onClick={onClose} />}
    </div>
  )
}

/**
 * Molecule UI component for Drawer
 */

export const Drawer = withStyles(Component)
