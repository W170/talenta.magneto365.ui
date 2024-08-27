import { MegaMenuSocialHeader } from '@components/UI/organism/MegaMenuSocialHeader'
import React, { useState } from 'react'
import { DrawerMenu } from '../../organism/DrawerMenu'
import { IMegaMenu } from './MegaMenu.interface'

const Component: React.FC<IMegaMenu> = ({ headerProps, headerDrawerMenuProps }) => {
  const [toggleModal, setToggleModal] = useState(false)

  return (
    <React.Fragment>
      <MegaMenuSocialHeader {...headerProps} />
      <DrawerMenu {...headerDrawerMenuProps} isOpen={toggleModal} onClose={() => setToggleModal(false)} />
    </React.Fragment>
  )
}

export const MegaMenu = Component
