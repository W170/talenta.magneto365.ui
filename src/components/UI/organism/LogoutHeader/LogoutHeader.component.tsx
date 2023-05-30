import React, { useState } from 'react'
import { Link, LogoComponent, MainButton } from '../../atoms'
import { Breadcrumbs, MobileSearchbar, Searchbar, Tab } from '../../molecules'

import { ILogoutHeader } from './LogoutHeader.interface'
import { withStyles } from './LogoutHeader.styles'
import { useMediaQuery } from '../../../hooks'

import {
  LogoProps,
  MenuButtonProps,
  MobileSearchbarButtonProps,
  MobileSearchbarProps
} from '../../../../constants/stories.constants'

const Component: React.FC<ILogoutHeader> = ({
  className,
  onClick,
  tabButtonJobs,
  tabButtonRecruiter,
  searchbarProps,
  signInLinkProps,
  signUpButtonProps,
  breadcrumbsProps
}) => {
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

  const logoutHeaderTab = useMediaQuery(<Tab tabButtonJobs={tabButtonJobs} tabButtonRecruiter={tabButtonRecruiter} />, {
    md: null
  })

  const logoutHeaderMenuButton = useMediaQuery(<MainButton {...MenuButtonProps} onClick={onClick} />)

  const logoutHeaderLogo = useMediaQuery(<LogoComponent {...LogoProps} />, {
    sm: <LogoComponent {...LogoProps} isoView={true} />
  })

  const logoutHeaderMobileSearchbarButton = useMediaQuery(null, {
    md: <MainButton onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
  })

  const logoutHeaderSearchbar = useMediaQuery(<Searchbar {...searchbarProps} />, {
    md: null
  })

  const logoutHeaderSignInLink = useMediaQuery(<Link {...signInLinkProps} isMobile={isMobileButton} />)

  const logoutHeaderButtonSignUp = useMediaQuery(<MainButton {...signUpButtonProps} isMobile={isMobileButton} />)

  const logoutHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs {...breadcrumbsProps} />, {
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
