import React, { useState } from 'react'
import { DrawerMenu } from '../../organism/DrawerMenu'
import { LogoutHeader } from '../../organism/LogoutHeader'
import { ILogoutTemplate } from './LogoutTemplate.interface'

const Component: React.FC<ILogoutTemplate> = ({ logoutHeaderProps, headerDrawerMenuProps }) => {
  const [toggleModal, setToggleModal] = useState(false)

  return (
    <React.Fragment>
      <LogoutHeader {...logoutHeaderProps} onMenuClick={() => setToggleModal(true)} />
      <DrawerMenu {...headerDrawerMenuProps} isOpen={toggleModal} onClose={() => setToggleModal(false)} />
    </React.Fragment>
  )
}

export const LogoutTemplate = Component
