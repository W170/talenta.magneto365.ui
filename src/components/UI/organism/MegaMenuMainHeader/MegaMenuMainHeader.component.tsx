import React, { useState } from 'react'
import { Avatar, Link, LogoComponent, MainButton } from '@components/UI/atoms'
import { ListMenuIcons, MegaMenuJobsTabs, MegaMenuPopover, MobileDrawer, UserMenu } from '@components/UI/molecules'
import styles from './MegaMenuMainHeader.modules.scss'
import {
  SignInIcon,
  SignInStyles,
  SignUpButtonStyle,
  logoProps,
  MobileSearchbarButtonProps,
  MenuButtonProps
} from '@constants/stories'
import { useLoggedInUser, useMegaMenuJobs, useMegaMenuMain } from '@components/UI/template/MegaMenu/MegaMenu.context'
import { SearchButton } from '@components/UI/molecules/SearchButton/SearchButton.component'
import { useMediaQuery } from '@components/hooks'
import { MobileSearchbar } from '../../molecules'
import { IMegaMenuMainHeader } from './MegaMenuMainHeader.interface'
import { Select2 } from '../Select2'
import MegaMenuSearchBar from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.component'

const Component: React.FC<IMegaMenuMainHeader> = ({ toggleDrawerMenu }) => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState(false)
  const { homeUrl, searchBarProps, loginProps, selectCountry, mobileSearchBarProps } = useMegaMenuMain()
  const { popoverRef } = useMegaMenuJobs()

  const listMenuUserProps = useLoggedInUser()
  const { profileImage = {}, isAuthenticated } = listMenuUserProps
  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }
  const isMobileButton = useMediaQuery(false, { md: true })

  const renderLogo = useMediaQuery(<LogoComponent {...logoProps} />, {
    sm: <LogoComponent {...logoProps} isoView />
  })

  const LogoutHeaderMobileSearchbar = useMediaQuery(null, {
    md: (
      <>
        {searchBarProps && (
          <MobileSearchbar
            {...mobileSearchBarProps}
            termValue={mobileSearchBarProps?.termValue}
            onClick={() => setShowSearchBar(false)}
            showMobileSearchbar={showSearchBar}
            focusSearchInput={showSearchBar}
          />
        )}
      </>
    )
  })

  const renderSearchBar = useMediaQuery(
    <>
      {searchBarProps && <MegaMenuSearchBar {...searchBarProps} />}
      <MegaMenuPopover popoverRef={popoverRef}>
        <MegaMenuJobsTabs />
      </MegaMenuPopover>
    </>,
    {
      md: searchBarProps && (
        <SearchButton
          searchValue={searchBarProps.occupation.termValue}
          buttonSize={'small'}
          onClick={toggleSearchBar}
          className={styles['mega-menu-main-header__search-button']}
          {...MobileSearchbarButtonProps}
        />
      )
    }
  )

  const LogoutHeaderMenuButton = useMediaQuery(null, {
    md: <MainButton {...MenuButtonProps} className={styles['mega-menu-main-header__menu']} onClick={toggleDrawerMenu} />
  })

  const loginAction = (
    <Link
      type={'button'}
      href={loginProps?.loginUrl || ''}
      text={loginProps?.loginText || ''}
      iconProps={{ ...SignInIcon, size: 15 }}
      linkStyles={{ ...SignInStyles, buttonColor: '#FFFFFF' }}
      isMobile={isMobileButton}
    />
  )

  const logoutAction = (
    <MainButton
      {...SignUpButtonStyle}
      buttonText={loginProps?.signUpText || ''}
      onClick={loginProps?.onClickSignUp || undefined}
      buttonSize={'medium'}
      iconProps={{ ...SignUpButtonStyle.iconProps, size: 15 }}
      isMobile={isMobileButton}
    />
  )

  const loginHeaderPopover = useMediaQuery(
    <UserMenu listMenuUserProps={listMenuUserProps} profileImage={profileImage} />,
    {
      md: <Avatar {...profileImage} onClick={() => setToggleMobileDrawer(true)} />
    }
  )

  return (
    <div className={styles['mega-menu-main-header']}>
      <div className={styles['mega-menu-main-header__main']}>
        {LogoutHeaderMobileSearchbar}
        {LogoutHeaderMenuButton}
        <a href={homeUrl}>{renderLogo}</a>
        {selectCountry && <Select2 haveTags={false} isMultiple={false} {...selectCountry} />}
        <div className={styles['mega-menu-main-header__search']}>{renderSearchBar}</div>
      </div>
      <div className={styles['mega-menu-main-header__login']}>
        {isAuthenticated ? (
          loginHeaderPopover
        ) : (
          <>
            {loginAction}
            {logoutAction}
          </>
        )}
      </div>
      <MobileDrawer isOpen={toggleMobileDrawer} onClose={() => setToggleMobileDrawer(false)}>
        <ListMenuIcons {...listMenuUserProps} />
      </MobileDrawer>
    </div>
  )
}

export const MegaMenuMainHeader = Component
