import React, { useState } from 'react'
import { Avatar, LogoComponent, MainButton } from '../../atoms'
import { Breadcrumbs, ListMenuIcons, MobileSearchbar, Searchbar, UserMenu } from '../../molecules'

import { ILoginJobsHeader } from './LoginJobsHeader.interface'
import styles from './LoginJobsHeader.module.scss'
import { useMediaQuery } from '../../../hooks'
import { MobileDrawer } from '../../molecules/MobileDrawer/MobileDrawer.component'

import {
  MenuButtonProps,
  LogoProps,
  searchPropsButton,
  removePropsButton,
  MobileSearchbarButtonProps
} from '../../../../constants/stories.constants'
import { BrandMenu } from '../BrandMenu'

const Muiclass = 'magneto-ui'

const LoginJobsHeader: React.FC<ILoginJobsHeader> = ({
  searchbar,
  mobileSearchbar,
  breadcrumbsText,
  onMenuClick,
  homeUrl,
  profileImage,
  listMenuUserProps,
  brandMenuProps,
  gif
}) => {
  const { companySlug, companyLogo, companyUrl, brandsProps } = brandMenuProps
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState(false)

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  const loginHeaderPopover = useMediaQuery(
    <UserMenu listMenuUserProps={listMenuUserProps} profileImage={profileImage} />,

    {
      md: <Avatar {...profileImage} onClick={() => setToggleMobileDrawer(true)} />
    }
  )

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

  const LoginHeaderMenuButton = useMediaQuery(<MainButton {...MenuButtonProps} onClick={onMenuClick} />)

  const LogoutHeaderMobileSearchbarButton = useMediaQuery(null, {
    md: <MainButton onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
  })

  const LogoutHeaderSearchbar = useMediaQuery(
    <Searchbar {...searchbar} searchButtonProps={searchPropsButton} removeButtonProps={removePropsButton} />,
    {
      md: null
    }
  )

  // Breadcrumbs Component
  const LogoutHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs breadcrumbText={breadcrumbsText} />, {
    md: null
  })

  return (
    <header className={styles[`${Muiclass}-login-jobs-header`]}>
      {LogoutHeaderMobileSearchbar}
      <div className={styles[`${Muiclass}-login-jobs-header--second-row`]}>
        <div className={styles[`${Muiclass}-login-jobs-header--second-row__left-section`]}>
          {LoginHeaderMenuButton}
          <a href={homeUrl}>
            <LogoComponent {...LogoProps} isoView={true} />
          </a>

          {brandsProps.brands && brandsProps.brands?.length > 0 ? (
            <BrandMenu {...brandMenuProps} />
          ) : (
            <a href={companyUrl}>
              <img
                className={styles[`${Muiclass}-login-jobs-header--second-row__left-section--company-logo`]}
                src={companyLogo}
                alt={companySlug ? companySlug : ''}
              />
            </a>
          )}

          {gif && (
            <img
              className={styles[`${Muiclass}-login-jobs-header--second-row__left-section--gif`]}
              alt={companySlug ? companySlug : ''}
              src={gif}
            />
          )}

          {LogoutHeaderMobileSearchbarButton}
        </div>
        <div className={styles[`${Muiclass}-login-jobs-header--second-row__middle-section`]}>
          {LogoutHeaderSearchbar}
        </div>
        <div className={styles[`${Muiclass}-login-jobs-header--second-row__right-section`]}>{loginHeaderPopover}</div>
      </div>
      <div className={styles[`${Muiclass}-login-jobs-header--third-row`]}>{LogoutHeaderBreadcrumbs}</div>
      <MobileDrawer isOpen={toggleMobileDrawer} onClose={() => setToggleMobileDrawer(false)}>
        <ListMenuIcons {...listMenuUserProps} />
      </MobileDrawer>
    </header>
  )
}

/**
 *  Header Jobs Logout Organism
 */

export default LoginJobsHeader
