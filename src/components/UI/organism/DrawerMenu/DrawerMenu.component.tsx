import React from 'react'
import { Drawer } from '../../molecules/Drawer'
import { IDrawerOrganism } from './DrawerMenu.interface'
import { ActiosContainer, MenuContainer, withStyles } from './DrawerMenu.styles'
import { ListMenuItems } from '../../molecules/ListMenuItems'
import { ListIconLink } from '../../molecules/ListIconLink'
import { HeaderDrawerTabs } from '../../molecules/HeaderDrawerTabs/HeaderDrawerTabs.components'
import { MainButton } from '../../atoms/MainButton'

const Component: React.FC<IDrawerOrganism> = ({
  className,
  listIcon,
  headerProps,
  login,
  createAccount,
  listMenuProps
}) => {
  return (
    <div className={className}>
      <Drawer direction="left" isOpen={true} onClose={() => ({})}>
        <HeaderDrawerTabs {...headerProps} />
        <MenuContainer>
          <ListMenuItems {...listMenuProps} />
        </MenuContainer>
        <ActiosContainer>
          <MainButton buttonSize="full" {...createAccount} />
          <MainButton buttonSize="full" {...login} />
          <ListIconLink listIcon={listIcon} />
        </ActiosContainer>
      </Drawer>
    </div>
  )
}

export const DrawerMenu = withStyles(Component)
