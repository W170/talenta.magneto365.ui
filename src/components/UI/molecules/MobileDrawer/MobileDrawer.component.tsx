import React from 'react'
import { DrawerPortal } from '../Drawer/DrawerPortal'
import { IMoblieDrawer } from './MobileDrawer.interface'
import { Add } from 'iconsax-react'
import { IconItem } from '../../atoms/Icon'
import { withStyles } from './MobileDrawer.styles'

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
