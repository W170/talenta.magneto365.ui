import React, { useState } from 'react'
import { Link, LogoComponent, MainButton } from '../../atoms'
import { Breadcrumbs, MobileSearchbar, Tab, TabButton, Searchbar } from '../../molecules'

import { ILogoutHeader } from './LogoutHeader.interface'
import { withStyles } from './LogoutHeader.styles'
import { useMediaQuery } from '../../../hooks'

import {
  LeftTabStyles,
  RightTabStyles,
  MenuButtonProps,
  LogoProps,
  searchPropsButton,
  removePropsButton,
  MobileSearchbarButtonProps,
  SignInIcon,
  SignInStyles,
  SignUpButtonStyle
} from '../../../../constants/stories.constants'

const Component: React.FC<ILogoutHeader> = ({
  leftTabButton,
  rightTabButton,
  searchbar,
  mobileSearchbar,
  signInLink,
  signUpButton,
  breadcrumbsText,
  onClick,
  className
}) => {
  const { type, href, text } = signInLink
  const { buttonText } = signUpButton
  const [showSearchBar, setShowSearchBar] = useState(false)
  const isMobileButton = useMediaQuery(false, {
    md: true
  })

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  // Mobile Searchbar Component
  const LogoutHeaderMobileSearchbar = useMediaQuery(null, {
    md: (
      <MobileSearchbar
        {...mobileSearchbar}
        onClick={() => setShowSearchBar(false)}
        showMobileSearchbar={showSearchBar}
        focusSearchInput={showSearchBar}
      />
    )
  })

  // Tab Component
  const LogoutHeaderTab = useMediaQuery(
    <Tab>
      <TabButton tabButtonLink={leftTabButton} tabButtonStyle={LeftTabStyles} />
      <TabButton tabButtonLink={rightTabButton} tabButtonStyle={RightTabStyles} />
    </Tab>,
    {
      md: null
    }
  )

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
    <Searchbar {...searchbar} searchButtonProps={searchPropsButton} removeButtonProps={removePropsButton} />,
    {
      md: null
    }
  )

  // SignIn Link Component
  const LogoutHeaderLinkSignIn = useMediaQuery(
    <Link
      type={type}
      href={href}
      text={text}
      iconProps={SignInIcon}
      linkStyles={SignInStyles}
      isMobile={isMobileButton}
    />
  )

  // SignUp Button Component
  const LogoutHeaderButtonSignUp = useMediaQuery(
    <MainButton {...SignUpButtonStyle} buttonText={buttonText} isMobile={isMobileButton} />
  )

  // Breadcrumbs Component
  const LogoutHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs breadcrumbText={breadcrumbsText} />, {
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
          {LogoutHeaderLinkSignIn}
          {LogoutHeaderButtonSignUp}
        </div>
      </div>
      <div className="magneto-ui-third-row">{LogoutHeaderBreadcrumbs}</div>
    </header>
  )
}

/**
 * UI Header Organisim for 1024 resolution/size
 */

export const LogoutHeader = withStyles(Component)
