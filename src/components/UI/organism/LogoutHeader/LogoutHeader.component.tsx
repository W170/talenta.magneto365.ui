import React, { useState } from 'react'
import { Link } from '../../atoms'
import { LogoComponent } from '../../atoms'
import { MainButton } from '../../atoms'
import { Breadcrumbs } from '../../molecules'
import { MobileSearchbar } from '../../molecules'
import { Searchbar } from '../../molecules'
import { Tab } from '../../molecules'

import { ILogoutHeader } from './LogoutHeader.interface'
import { withStyles } from './LogoutHeader.styles'
import { useMediaQuery } from '../../../hooks'

import {
  LogoProps,
  MenuButtonProps,
  searchPropsButton,
  removePropsButton,
  MobileSearchbarProps,
  MobileSearchbarButtonProps,
  SignUpButtonProps,
  SignInLinkProps,
  BreadcrumbsProps
} from '../../../../constants/stories.constants'

const Component: React.FC<ILogoutHeader> = ({ tabButtons, searchbarConfig, signInLink, onClick, className }) => {
  const { leftButton, rightButton } = tabButtons

  const [showSearchBar, setShowSearchBar] = useState(false)

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  const isMobileButton = useMediaQuery(false, {
    md: true
  })

  // Mobile Searchbar Component
  const LogoutHeaderMobileSearchbar = useMediaQuery(null, {
    md: (
      <MobileSearchbar
        {...MobileSearchbarProps}
        onClick={() => setShowSearchBar(false)}
        showMobileSearchbar={showSearchBar}
        focusSearchInput={showSearchBar}
      />
    )
  })

  // Tab Component
  const LogoutHeaderTab = useMediaQuery(<Tab leftButton={leftButton} rightButton={rightButton} />, {
    md: null
  })

  // Menu Button Component
  const LogoutHeaderMenuButton = useMediaQuery(<MainButton {...MenuButtonProps} onClick={onClick} />)

  // Header Logo Component
  const LogoutHeaderLogo = useMediaQuery(<LogoComponent {...LogoProps} />, {
    sm: <LogoComponent {...LogoProps} isoView={true} />
  })

  // Mobile Searchbar Button Component
  const LogoutHeaderMobileSearchbarButton = useMediaQuery(null, {
    md: <MainButton onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
  })

  // Searchbar Component
  const LogoutHeaderSearchbar = useMediaQuery(
    <Searchbar {...searchbarConfig} searchButtonProps={searchPropsButton} removeButtonProps={removePropsButton} />,
    {
      md: null
    }
  )

  // SignIn Link Component
  const logoutHeaderLinkSignIn = useMediaQuery(
    <Link {...signInLink} linkProps={SignInLinkProps} isMobile={isMobileButton} />
  )

  const logoutHeaderButtonSignUp = useMediaQuery(
    <MainButton {...SignUpButtonProps} isMobile={isMobileButton} spacing={10} />
  )

  const logoutHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs {...BreadcrumbsProps} />, {
    md: null
  })

  return (
    <header className={className}>
      {LogoutHeaderMobileSearchbar}
      <div className="magneto-ui-first-row">{LogoutHeaderTab}</div>
      <div className="magneto-ui-second-row">
        <div className="magneto-ui-left-section">
          {LogoutHeaderMenuButton}
          {LogoutHeaderLogo}
          {LogoutHeaderMobileSearchbarButton}
        </div>
        <div className="magneto-ui-middle-section">{LogoutHeaderSearchbar}</div>
        <div className="magneto-ui-right-section">
          {logoutHeaderLinkSignIn}
          {logoutHeaderButtonSignUp}
        </div>
      </div>
      <div className="magneto-ui-third-row">{logoutHeaderBreadcrumbs}</div>
    </header>
  )
}

/**
 * UI Header Organisim for 1024 resolution/size
 */

export const LogoutHeader = withStyles(Component)
