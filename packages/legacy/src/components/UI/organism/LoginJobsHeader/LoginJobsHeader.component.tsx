import React, { useMemo, useState } from 'react'
import { Avatar, LogoComponent, MainButton } from '../../atoms'
import { Breadcrumbs, HeaderTabs, ListMenuIcons, MobileSearchbar, Searchbar, UserMenu } from '../../molecules'

import { ILoginJobsHeader } from './LoginJobsHeader.interface'
import { useMediaQuery } from '../../../hooks'
import { MobileDrawer } from '../../molecules/MobileDrawer/MobileDrawer.component'

import {
  MenuButtonProps,
  logoProps,
  searchPropsButton,
  removePropsButton,
  MobileSearchbarButtonProps
} from '@constants/stories'
import { BrandMenu } from '../BrandMenu'

import styles from './LoginJobsHeader.module.scss'
import { SearchButton } from '@components/UI/molecules/SearchButton'
import MegaMenuSearchBar from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.component'
import { IMegaMenuSearchBar } from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.interface'

const Muiclass = 'magneto-ui'

const LoginJobsHeader: React.FC<ILoginJobsHeader> = ({
  searchbar,
  mobileSearchbar,
  breadcrumbProps,
  onMenuClick,
  homeUrl,
  profileImage,
  listMenuUserProps,
  brandMenuProps,
  gif,
  jobsTabsProps,
  processTabsProps,
  curriculumTabProps
}) => {
  const { companySlug, companyLogo, companyUrl, brandsProps } = brandMenuProps
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState(false)

  const haveGif = useMemo(() => {
    return gif ? styles['have-gif'] : ''
  }, [gif])

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  const isLoginHeaderSearch = (searchbar: any): searchbar is IMegaMenuSearchBar => {
    return typeof searchbar.occupation === 'object' && searchbar.occupation !== null
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

  const loginHeaderOptionTabs = useMediaQuery(
    <>
      <HeaderTabs {...jobsTabsProps} />
      <HeaderTabs {...processTabsProps} />
      <HeaderTabs {...curriculumTabProps} />
    </>,
    {
      xl: null
    }
  )

  const LoginHeaderMenuButton = useMediaQuery(<MainButton {...MenuButtonProps} onClick={onMenuClick} />)

  const LogoutHeaderMobileSearchbarButton = useMediaQuery(null, {
    md: isLoginHeaderSearch(searchbar) ? (
      <SearchButton
        searchValue={searchbar.occupation.termValue}
        onClick={toggleSearchBar}
        {...MobileSearchbarButtonProps}
      />
    ) : (
      <SearchButton searchValue={searchbar.termValue} onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
    )
  })

  const LogoutHeaderSearchbar = useMediaQuery(
    isLoginHeaderSearch(searchbar) ? (
      <MegaMenuSearchBar {...searchbar} />
    ) : (
      <Searchbar {...searchbar} searchButtonProps={searchPropsButton} removeButtonProps={removePropsButton} />
    ),
    {
      md: null
    }
  )

  // Breadcrumbs Component
  const LogoutHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs breadcrumbProps={breadcrumbProps} homeUrl={homeUrl} />, {
    md: null
  })

  return (
    <header className={styles[`${Muiclass}-login-jobs-header`]}>
      {LogoutHeaderMobileSearchbar}
      <div className={styles[`${Muiclass}-login-jobs-header--second-row`]}>
        <div className={styles[`${Muiclass}-login-jobs-header--second-row__left-section`]}>
          {LoginHeaderMenuButton}
          <a href={homeUrl}>
            <LogoComponent {...logoProps} isoView={true} />
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
        <div className={`${styles[`${Muiclass}-login-jobs-header--second-row__middle-section`]} ${haveGif}`}>
          {LogoutHeaderSearchbar}
        </div>
        <div className={styles[`${Muiclass}-login-jobs-header--second-row__right-section`]}>
          {!gif && loginHeaderOptionTabs} {loginHeaderPopover}
        </div>
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
