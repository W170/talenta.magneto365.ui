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
  TabProps,
  LogoProps,
  SignInLinkProps,
  SignUpButtonProps,
  MenuButtonProps,
  MobileSearchbarButtonProps,
  MobileSearchbarProps,
  SearchbarProps,
  breadcrumbText
} from '../../../../constants/stories.constants'

const Component: React.FC<ILogoutHeader> = ({ className, onClick }) => {
  const [showSearchBar, setShowSearchBar] = useState(false)

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  const isMobileButton = useMediaQuery(false, {
    md: true
  })

  const logoutHeaderMobileSearchbar = useMediaQuery(null, {
    md: (
      <MobileSearchbar
        {...MobileSearchbarProps}
        onClick={() => setShowSearchBar(false)}
        showMobileSearchbar={showSearchBar}
        focusSearchInput={showSearchBar}
      />
    )
  })

  const logoutHeaderTab = useMediaQuery(<Tab {...TabProps} />, {
    md: null
  })

  const logoutHeaderMenuButton = useMediaQuery(<MainButton {...MenuButtonProps} onClick={onClick} />)

  const logoutHeaderLogo = useMediaQuery(<LogoComponent {...LogoProps} />, {
    sm: <LogoComponent {...LogoProps} isoView={true} />
  })

  const logoutHeaderMobileSearchbarButton = useMediaQuery(null, {
    md: <MainButton onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
  })

  const logoutHeaderSearchbar = useMediaQuery(<Searchbar {...SearchbarProps} />, {
    md: null
  })

  const logoutHeaderSignInLink = useMediaQuery(<Link {...SignInLinkProps} isMobile={isMobileButton} />)

  const logoutHeaderButtonSignUp = useMediaQuery(
    <MainButton {...SignUpButtonProps} isMobile={isMobileButton} spacing={10} />
  )

  const logoutHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs breadcrumbText={breadcrumbText} />, {
    md: null
  })

  return (
    <header className={className}>
      {logoutHeaderMobileSearchbar}
      <div className="magneto-ui-first-row">{logoutHeaderTab}</div>
      <div className="magneto-ui-second-row">
        <div className="magneto-ui-left-section">
          {logoutHeaderMenuButton}
          {logoutHeaderLogo}
          {logoutHeaderMobileSearchbarButton}
        </div>
        <div className="magneto-ui-middle-section">{logoutHeaderSearchbar}</div>
        <div className="magneto-ui-right-section">
          {logoutHeaderSignInLink}
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
