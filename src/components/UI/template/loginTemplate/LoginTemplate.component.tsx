import React, { useState } from 'react'
import { Drawer } from '../../molecules/Drawer'
import { MenuContainer, withStyles } from './LoginTemplate.styles'
import { ILoginTemplate } from './LoginTemplate.interface'
import { ListMenuItems } from '../../molecules/ListMenuItems'
import { ListIconLink } from '../../molecules/ListIconLink'
import { ListIcon, listMenuProps, logoPropsLogin } from '../../../../constants/stories.constants'
import { ActiosContainer } from '../../organism/DrawerMenu/DrawerMenu.styles'
import { LogoComponent } from '../../atoms/Logo'
import { LoginHeader } from '../../organism/LoginHeader'

const Component: React.FC<ILoginTemplate> = ({ className }) => {
  const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div className={className}>
      <LoginHeader onClick={() => setToggleDrawer(true)} />
      <Drawer direction="left" isOpen={toggleDrawer} onClose={() => setToggleDrawer(false)}>
        <LogoComponent {...logoPropsLogin} />
        <MenuContainer>
          <ListMenuItems {...listMenuProps} />
        </MenuContainer>
        <ActiosContainer>
          <ListIconLink spacing={30} listIcon={ListIcon} />
        </ActiosContainer>
      </Drawer>
    </div>
  )
}

export const LoginTemplate = withStyles(Component)
