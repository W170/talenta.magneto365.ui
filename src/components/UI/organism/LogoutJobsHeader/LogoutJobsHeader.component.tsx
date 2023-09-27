import React, { useState } from 'react'
import { Link, LogoComponent, MainButton, SearchItem } from '../../atoms'
import { Breadcrumbs, MobileSearchbar, Searchbar } from '../../molecules'

import { ILogoutJobsHeader } from './LogoutJobsHeader.interface'
import styles from './LogoutJobsHeader.module.scss'
import { useMediaQuery } from '../../../hooks'

import {
  MenuButtonProps,
  logoProps,
  searchPropsButton,
  removePropsButton,
  MobileSearchbarButtonProps,
  SignInIcon,
  SignInStyles,
  SignUpButtonStyle
} from '@constants/stories'
import { BrandMenu } from '../BrandMenu'

const Muiclass = 'magneto-ui'

const LogoutJobsHeader: React.FC<ILogoutJobsHeader> = ({
  searchbar,
  mobileSearchbar,
  signInLink,
  signUpButton,
  breadcrumbProps,
  onMenuClick,
  homeUrl,
  brandMenuProps,
  gif,
  allJobsText,
  allJobsLink
}) => {
  const { type, href, text } = signInLink
  const { buttonText, loadingState, onClick } = signUpButton
  const { companySlug, companyLogo, companyUrl, brandsProps } = brandMenuProps
  const [showSearchBar, setShowSearchBar] = useState(false)
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
        onClick={() => setShowSearchBar(false)}
        showMobileSearchbar={showSearchBar}
        focusSearchInput={showSearchBar}
      />
    )
  })

  const LogoutHeaderMenuButton = useMediaQuery(<MainButton {...MenuButtonProps} onClick={onMenuClick} />)

  const LogoutHeaderMobileSearchbarButton = useMediaQuery(null, {
    md: <MainButton onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
  })

  const LogoutHeaderSearchbar = useMediaQuery(
    <Searchbar {...searchbar} searchButtonProps={searchPropsButton} removeButtonProps={removePropsButton} />,
    {
      md: null
    }
  )

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

  const LogoutHeaderButtonSignUp = useMediaQuery(
    <MainButton
      buttonSize="full"
      {...SignUpButtonStyle}
      buttonText={buttonText}
      onClick={onClick}
      loadingState={loadingState}
      isMobile={isMobileButton}
    />
  )

  const LogoutHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs breadcrumbProps={breadcrumbProps} homeUrl={homeUrl} />, {
    md: null
  })

  return (
    <header className={styles[`${Muiclass}-logout-jobs-header`]}>
      {LogoutHeaderMobileSearchbar}
      <div className={styles[`${Muiclass}-logout-jobs-header--second-row`]}>
        <div className={styles[`${Muiclass}-logout-jobs-header--second-row__left-section`]}>
          {LogoutHeaderMenuButton}
          <a href={homeUrl}>
            <LogoComponent {...logoProps} isoView={true} />
          </a>
          {brandsProps.brands && brandsProps.brands?.length > 0 ? (
            <BrandMenu {...brandMenuProps} />
          ) : (
            <a href={companyUrl}>
              <img
                className={styles[`${Muiclass}-logout-jobs-header--second-row__left-section--company-logo`]}
                src={companyLogo}
                alt={companySlug ? companySlug : ''}
              />
            </a>
          )}

          {gif && (
            <img
              className={styles[`${Muiclass}-logout-jobs-header--second-row__left-section--gif`]}
              alt={companySlug ? companySlug : ''}
              src={gif}
            />
          )}

          {LogoutHeaderMobileSearchbarButton}
        </div>
        <div className={styles[`${Muiclass}-logout-jobs-header--second-row__middle-section`]}>
          {LogoutHeaderSearchbar}
          <SearchItem tag={allJobsText} url={allJobsLink} />
        </div>
        <div className={styles[`${Muiclass}-logout-jobs-header--second-row__right-section`]}>
          {LogoutHeaderLinkSignIn}
          {LogoutHeaderButtonSignUp}
        </div>
      </div>
      <div className={styles[`${Muiclass}-logout-jobs-header--third-row`]}>{LogoutHeaderBreadcrumbs}</div>
    </header>
  )
}

/**
 *  Header Jobs Logout Organism
 */

export default LogoutJobsHeader
