import React from 'react'
import { Drawer } from '@components/UI/molecules'
import { INavMenuDrawerAnalystProps } from './NavMenuDrawerAnalyst.interface'
import { NavMenuAnalyst } from '@components/UI/organism'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './NavMenuDrawerAnalyst.module.scss'

const NavMenuDrawerAnalyst: React.FC<INavMenuDrawerAnalystProps> = ({ isDrawerOpen = false, onClose, ...props }) => {
  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

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

export default NavMenuDrawerAnalyst
