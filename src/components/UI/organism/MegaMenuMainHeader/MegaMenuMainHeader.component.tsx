import React from 'react'
import { Link, LogoComponent, MainButton, MegaMenuPopover } from '@components/UI/atoms'
import { MegaMenuJobsTabs, Searchbar } from '@components/UI/molecules'
import styles from './MegaMenuMainHeader.modules.scss'
import { SignInIcon, SignInStyles, SignUpButtonStyle, searchPropsButton, removePropsButton } from '@constants/stories'
import { LogoMagneto } from '@constants/icons.constants'
import { useMegaMenuMain } from '@components/UI/template/MegaMenu/MegaMenu.context'

const Component: React.FC = () => {
  const { logoProps, searchBarProps, loginProps } = useMegaMenuMain()

  return (
    <div className={styles['mega-menu-main-header']}>
      {logoProps && (
        <a href={logoProps.url} target={'_blank'} rel="noreferrer">
          <LogoComponent logo={LogoMagneto} />
        </a>
      )}
      {searchBarProps && (
        <div className={styles['mega-menu-main-header__search']}>
          <Searchbar searchButtonProps={searchPropsButton} removeButtonProps={removePropsButton} {...searchBarProps} />
          <MegaMenuPopover>
            <MegaMenuJobsTabs />
          </MegaMenuPopover>
        </div>
      )}
      {loginProps && (
        <div className={styles['mega-menu-main-header__login']}>
          <Link
            type={'button'}
            href={loginProps.loginUrl}
            text={loginProps.loginText}
            iconProps={{ ...SignInIcon, size: 15 }}
            linkStyles={{ ...SignInStyles, buttonColor: '#FFFFFF' }}
          />

          <MainButton
            {...SignUpButtonStyle}
            buttonText={loginProps.signUpText}
            onClick={loginProps.onClickSignUp}
            buttonSize={'medium'}
            iconProps={{ ...SignUpButtonStyle.iconProps, size: 15 }}
          />
        </div>
      )}
    </div>
  )
}

export const MegaMenuMainHeader = Component
