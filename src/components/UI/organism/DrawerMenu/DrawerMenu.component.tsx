import React from 'react'
import { MainButton } from '../../atoms'
import { Drawer, HeaderDrawerTabs, ListIconLink, ListMenuItems } from '../../molecules'
import { IDrawerOrganism } from './DrawerMenu.interface'
import { ActiosContainer, MenuContainer, withStyles } from './DrawerMenu.styles'

import {
  LogoProps,
  DrawerLeftTabStyles,
  DrawerRightTabStyles,
  CreateAccountButton,
  LoginButton,
  ListIcon
} from '../../../../constants/stories.constants'

const Component: React.FC<IDrawerOrganism> = ({
  headerDrawerProps,
  listMenuProps,
  createAccountButton,
  loginButton,
  isOpen = false,
  onClose,
  className
}) => {
  const { buttonText: buttonTextSignUp, onClick: onSignUpClick, loadingState } = createAccountButton
  const { buttonText: buttonTextLogin, onClick: onLogInClick } = loginButton

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className={className}>
      <Drawer direction="left" isOpen={isOpen} onClose={handleClose}>
        <HeaderDrawerTabs
          {...headerDrawerProps}
          logoProps={LogoProps}
          leftTabStyle={DrawerLeftTabStyles}
          rightTabStyle={DrawerRightTabStyles}
        />
        <MenuContainer>
          <ListMenuItems {...listMenuProps} />
        </MenuContainer>
        <ActiosContainer>
          <MainButton
            buttonSize="full"
            {...CreateAccountButton}
            buttonText={buttonTextSignUp}
            onClick={onSignUpClick}
            loadingState={loadingState}
          />
          <MainButton buttonSize="full" {...LoginButton} buttonText={buttonTextLogin} onClick={onLogInClick} />
          <ListIconLink listIcon={ListIcon} spacing={30} />
        </ActiosContainer>
      </Drawer>
    </div>
  )
}

export const DrawerMenu = withStyles(Component)
