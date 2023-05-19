import React, { useState } from 'react'
import { Drawer } from '../../molecules/Drawer'
import { HeaderDrawerTabs } from '../../molecules/HeaderDrawerTabs'
import { MenuContainer, withStyles } from './LogoutTemplate.styles'
import { ILogoutTemplate } from './LogoutTemplate.interface'
import { ListMenuItems } from '../../molecules/ListMenuItems'
import { MainButton } from '../../atoms/MainButton'
import { ListIconLink } from '../../molecules/ListIconLink'
import { logoutProps } from '../../../../constants/stories.constants'
import { ActiosContainer } from '../../organism/DrawerMenu/DrawerMenu.styles'
import { LogoutHeader } from '../../organism/LogoutHeader'

const Component: React.FC<ILogoutTemplate> = ({
  className,
  headerProps,
  listMenuProps,
  login,
  createAccount,
  listIcon
}) => {
  const [toggleModal, setToggleModal] = useState(false)

  return (
    <div className={className}>
      <LogoutHeader {...logoutProps} onClick={() => setToggleModal(true)} />
      <Drawer direction="left" isOpen={toggleModal} onClose={() => setToggleModal(false)}>
        <HeaderDrawerTabs {...headerProps} />
        <MenuContainer>
          <ListMenuItems {...listMenuProps} />
        </MenuContainer>
        <ActiosContainer>
          <MainButton buttonSize="full" {...createAccount} />
          <MainButton buttonSize="full" {...login} />
          <ListIconLink spacing={30} listIcon={listIcon} />
        </ActiosContainer>
      </Drawer>
    </div>
  )
}

export const LogoutTemplate = withStyles(Component)
