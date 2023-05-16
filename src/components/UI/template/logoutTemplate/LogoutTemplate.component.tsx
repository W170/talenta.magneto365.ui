import React, { useState } from 'react'
import { Drawer } from '../../molecules/Drawer'
import { HeaderDrawerTabs } from '../../molecules/HeaderDrawerTabs'
import { MenuContainer, withStyles } from './LogoutTemplate.styles'
import { ILogoutTemplate } from './LogoutTemplate.interface'
import { ListMenuItems } from '../../molecules/ListMenuItems'
import { MainButton } from '../../atoms/MainButton'
import { ListIconLink } from '../../molecules/ListIconLink'
import {
  ButtonsProps,
  ButtonsProps2,
  ListIcon,
  headerProps,
  listMenuProps
} from '../../../../constants/stories.constants'
import { ActiosContainer } from '../../organism/DrawerMenu/DrawerMenu.styles'

const Component: React.FC<ILogoutTemplate> = ({ className }) => {
  const [toggleModal, setToggleModal] = useState(false)

  return (
    <div className={className}>
      <button onClick={() => setToggleModal(true)}>Open Modal</button>
      <Drawer direction="left" isOpen={toggleModal} onClose={() => setToggleModal(false)}>
        <HeaderDrawerTabs {...headerProps} />
        <MenuContainer>
          <ListMenuItems {...listMenuProps} />
        </MenuContainer>
        <ActiosContainer>
          <MainButton buttonSize="full" {...ButtonsProps} />
          <MainButton buttonSize="full" {...ButtonsProps2} />
          <ListIconLink spacing={30} listIcon={ListIcon} />
        </ActiosContainer>
      </Drawer>
    </div>
  )
}

export const LogoutTemplate = withStyles(Component)
