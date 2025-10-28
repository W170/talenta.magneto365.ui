import React, { Fragment, useState } from 'react'
import { Link, LogoComponent, MainButton, SearchItem } from '../../atoms'
import { Breadcrumbs, MobileSearchbar, Tab, TabButton, Searchbar } from '../../molecules'

import { ILogoutHeader } from './LogoutHeader.interface'
import styles from './LogoutHeader.modules.scss'
import { useMediaQuery } from '../../../hooks'

import {
  LeftLinkStyles,
  LeftTabStyles,
  RightLinkStyles,
  RightTabStyles,
  MenuButtonProps,
  logoProps,
  searchPropsButton,
  removePropsButton,
  MobileSearchbarButtonProps,
  SignInIcon,
  SignInStyles,
  SignUpButtonStyle
} from '@constants/stories'
import { SearchButton } from '@components/UI/molecules/SearchButton/SearchButton.component'

const Component: React.FC<ILogoutHeader> = ({
  leftTabButton,
  rightTabButton,
  searchbar,
  mobileSearchbar,
  signInLink,
  signUpButton,
  breadcrumbProps,
  onMenuClick,
  homeUrl,
  allJobsText,
  allJobsLink,
  hasMobileSearchBarButton = false
}) => {
  const { type, href, text } = signInLink
  const { buttonText, loadingState, onClick } = signUpButton
  const [showSearchBar, setShowSearchBar] = useState(false)
  const iconSize = useMediaQuery(25, {
    sm: 16
  })
  const isMobileButton = useMediaQuery(false, {
    md: true
  })

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  const LogoutHeaderMobileSearchbar = useMediaQuery(null, {
    md: (
      <MobileSearchbar
        {...mobileSearchbar}
        termValue={searchbar.termValue}
        onClick={() => setShowSearchBar(false)}
        showMobileSearchbar={showSearchBar}
        focusSearchInput={showSearchBar}
      />
    )
  })

  // Tab Component
  const LogoutHeaderTab = useMediaQuery(
    <Tab>
      <TabButton tabButtonLink={leftTabButton} tabButtonLinkStyles={LeftLinkStyles} tabButtonStyles={LeftTabStyles} />
      <TabButton
        tabButtonLink={rightTabButton}
        tabButtonLinkStyles={RightLinkStyles}
        tabButtonStyles={RightTabStyles}
      />
    </Tab>,
    {
      md: null
    }
  )

  // Menu Button Component
  const LogoutHeaderMenuButton = useMediaQuery(<MainButton {...MenuButtonProps} onClick={onMenuClick} />)

  // Header Logo Component
  const LogoutHeaderLogo = useMediaQuery(<LogoComponent {...logoProps} />, {
    sm: <LogoComponent {...logoProps} isoView={true} />
  })

  // Mobile Searchbar Button Component
  const LogoutHeaderMobileSearchbarButton = useMediaQuery(null, {
    xs: hasMobileSearchBarButton ? (
      <SearchButton searchValue={searchbar.termValue} onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
    ) : (
      <Fragment />
    ),
    md: <SearchButton searchValue={searchbar.termValue} onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
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
      iconProps={{ ...SignInIcon, size: iconSize }}
      linkStyles={SignInStyles}
      isMobile={isMobileButton}
    />
  )

  // SignUp Button Component
  const LogoutHeaderButtonSignUp = useMediaQuery(
    <MainButton
      {...SignUpButtonStyle}
      buttonText={buttonText}
      iconProps={{ ...SignUpButtonStyle.iconProps, size: iconSize }}
      onClick={onClick}
      loadingState={loadingState}
      isMobile={isMobileButton}
    />
  )

  // Breadcrumbs Component
  const LogoutHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs breadcrumbProps={breadcrumbProps} homeUrl={homeUrl} />, {
    md: null
  })

  return (
    <header className={styles.LogoutHeaderComponent}>
      {LogoutHeaderMobileSearchbar}
      <div className={styles['magneto-ui-first-row']}>{LogoutHeaderTab}</div>
      <div className={styles['magneto-ui-second-row']}>
        <div className={styles['magneto-ui-left-section']}>
          {LogoutHeaderMenuButton}
          <a href={homeUrl}>{LogoutHeaderLogo}</a>
          {LogoutHeaderMobileSearchbarButton}
        </div>
        <div className={styles['magneto-ui-middle-section']}>
          {LogoutHeaderSearchbar} <SearchItem tag={allJobsText} url={allJobsLink} />
        </div>

        <div className={styles['magneto-ui-right-section']}>
          {LogoutHeaderLinkSignIn}
          {LogoutHeaderButtonSignUp}
        </div>
      </div>
      <div className={styles['magneto-ui-third-row']}>{LogoutHeaderBreadcrumbs}</div>
    </header>
  )
}

/**
 * UI Header Organisim for 1024 resolution/size
 */

export const LogoutHeader = Component
