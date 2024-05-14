import React, { useCallback } from 'react'
import { Drawer } from '@components/UI/molecules'
import { INavMenuDrawerAnalystProps } from './NavMenuDrawerAnalyst.interface'
import { NavMenuAnalyst } from '@components/UI/organism'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './NavMenuDrawerAnalyst.module.scss'

const Component: React.FC<INavMenuDrawerAnalystProps> = ({ isDrawerOpen = false, onClose, ...props }) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  return (
    <Drawer
      isOpen={isDrawerOpen}
      onClose={handleClose}
      customPadding={0}
      className={CNM.get({ styles, cls: ['nav-menu-drawer-analyst__drawer'] })}
    >
      <NavMenuAnalyst isDrawerOpen={isDrawerOpen} isFullWidth={true} {...props} />
    </Drawer>
  )
}

/**
 * Organism UI component of navigation menu analyst
 */
export const NavMenuDrawerAnalyst = Component
