import React from 'react'
import { MainButton } from '../../atoms'
import { Drawer, HeaderDrawerTabs, ListIconLink, ListMenuItems } from '../../molecules'
import { IDrawerOrganism } from './DrawerMenu.interface'
import style from './drawerMenu.module.scss'

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
  onClose
}) => {
  const { buttonText: buttonTextSignUp, onClick: onSignUpClick, loadingState } = createAccountButton
  const { buttonText: buttonTextLogin, onClick: onLogInClick } = loginButton

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className={style['magneto-ui-drawer-menu']}>
      <Drawer isOpen={isOpen} onClose={handleClose}>
        <HeaderDrawerTabs
          {...headerDrawerProps}
          logoProps={LogoProps}
          leftTabStyle={DrawerLeftTabStyles}
          rightTabStyle={DrawerRightTabStyles}
        />
        <div className={style['menu-container']}>
          <ListMenuItems {...listMenuProps} />
        </div>
        <div className={style.actionsContainer}>
          <MainButton
            buttonSize="full"
            {...CreateAccountButton}
            buttonText={buttonTextSignUp}
            onClick={onSignUpClick}
            loadingState={loadingState}
          />
          <MainButton buttonSize="full" {...LoginButton} buttonText={buttonTextLogin} onClick={onLogInClick} />
          <ListIconLink listIcon={ListIcon} spacing={30} />
        </div>
      </Drawer>
    </div>
  )
}

export const DrawerMenu = Component
