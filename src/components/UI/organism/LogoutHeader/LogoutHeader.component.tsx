import React, { useState } from 'react'
import { MainButton } from '../../atoms/MainButton'
import { Link } from '../../atoms/Link'
import { LogoComponent } from '../../atoms/Logo'
import { Breadcrumbs } from '../../molecules/Breadcrumbs'
import { MobileSearchbar } from '../../molecules/MobileSearchbar'
import { Searchbar } from '../../molecules/Searchbar'
import { Tab } from '../../molecules/Tab'

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
  BreadcrumbsProps
} from '../../../../constants/stories.constants'

const Component: React.FC<ILogoutHeader> = ({ className, onClick }) => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  const logoutHeaderTab = useMediaQuery(<Tab {...TabProps} />, {
    md: null
  })

  const logoutHeaderLogo = useMediaQuery(<LogoComponent {...LogoProps} />, {
    sm: <LogoComponent {...LogoProps} isoView={true} />
  })

  const logoutHeaderMobileSearchbarButton = useMediaQuery(null, {
    md: <MainButton onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
  })

  const isMobileButton = useMediaQuery(false, {
    md: true
  })

  const logoutHeaderSignInLink = useMediaQuery(<Link {...SignInLinkProps} isMobile={isMobileButton} />)

  const logoutHeaderButtonSignUp = useMediaQuery(
    <MainButton {...SignUpButtonProps} isMobile={isMobileButton} spacing={10} />
  )

  const logoutHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs {...BreadcrumbsProps} />, {
    md: null
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

  const logoutHeaderSearchbar = useMediaQuery(<Searchbar {...SearchbarProps} />, {
    md: null
  })

  return (
    <header className={className}>
      {logoutHeaderMobileSearchbar}
      <div className="magneto-ui-first-row">{logoutHeaderTab}</div>
      <div className="magneto-ui-second-row">
        <div className="magneto-ui-left-section">
          <MainButton {...MenuButtonProps} onClick={onClick} />
          {logoutHeaderLogo}
          {logoutHeaderMobileSearchbarButton}
        </div>
        <div className="magneto-ui-searchbar-section">{logoutHeaderSearchbar}</div>
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
