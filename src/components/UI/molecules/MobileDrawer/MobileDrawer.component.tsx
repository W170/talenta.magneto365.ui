import React from 'react'
import { IconItem } from '../../atoms'
import { DrawerPortal } from '../Drawer/DrawerPortal'
import { IMoblieDrawer } from './MobileDrawer.interface'
import { withStyles } from './MobileDrawer.styles'
import { Add } from 'iconsax-react'

const Component: React.FC<IMoblieDrawer> = ({ className, onClose, isOpen, children }) => {
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
 * Molecule UI component for Mobile Drawer
 */
export const MobileDrawer = withStyles(Component)
