import React, { useState } from 'react'
import { Drawer } from '../../molecules/Drawer'
import { HeaderDrawerTabs } from '../../molecules/HeaderDrawerTabs'
import { MenuContainer, withStyles } from './LogoutTemplate.styles'
import { ILogoutTemplate } from './LogoutTemplate.interface'
import { ListMenuItems } from '../../molecules/ListMenuItems'
import { MainButton } from '../../atoms/MainButton'
import { ListIconLink } from '../../molecules/ListIconLink'
import { ActiosContainer } from '../../organism/DrawerMenu/DrawerMenu.styles'
import { LogoutHeader } from '../../organism/LogoutHeader'
import { ListIcon, createAccount, headerProps, listMenuProps, login } from '../../../../constants/stories.constants'

const Component: React.FC<ILogoutTemplate> = ({ className }) => {
  const [toggleModal, setToggleModal] = useState(false)

  return (
    <div className={className}>
      <LogoutHeader onClick={() => setToggleModal(true)} />
      <Drawer direction="left" isOpen={toggleModal} onClose={() => setToggleModal(false)}>
        <HeaderDrawerTabs {...headerProps} />
        <MenuContainer>
          <ListMenuItems {...listMenuProps} />
        </MenuContainer>
        <ActiosContainer>
          <MainButton buttonSize="full" {...createAccount} />
          <MainButton buttonSize="full" {...login} />
          <ListIconLink spacing={30} listIcon={ListIcon} />
        </ActiosContainer>
      </Drawer>
    </div>
  )
}

export const LogoutTemplate = withStyles(Component)