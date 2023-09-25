import React, { useState } from 'react'
import { Avatar, LogoComponent, MainButton } from '../../atoms'
import {
  Breadcrumbs,
  HeaderTabs,
  MobileDrawer,
  MobileSearchbar,
  Searchbar,
  ListMenuIcons,
  UserMenu
} from '../../molecules'
import { ILoginHeader } from './LoginHeader.interface'
import { useMediaQuery } from '../../../hooks'

import styles from './LoginHeader.modules.scss'

import {
  logoProps,
  MenuButtonProps,
  MobileSearchbarButtonProps,
  searchPropsButton,
  removePropsButton
} from '@constants/stories'

const Component: React.FC<ILoginHeader> = ({
  onClick,
  listMenuUserProps,
  breadcrumbProps,
  profileImage,
  jobsTabsProps,
  processTabsProps,
  curriculumTabProps,
  searchbar,
  MobileSearchbarProps,
  homeUrl
}) => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState(false)

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  const loginHeaderMobileSearchbar = useMediaQuery(null, {
    md: (
      <MobileSearchbar
        {...MobileSearchbarProps}
        onClick={() => setShowSearchBar(false)}
        showMobileSearchbar={showSearchBar}
        focusSearchInput={showSearchBar}
      />
    )
  })

  const loginHeaderMenuButton = useMediaQuery(<MainButton {...MenuButtonProps} onClick={onClick} />)

  const loginHeaderLogo = useMediaQuery(<LogoComponent {...logoProps} />, {
    sm: <LogoComponent {...logoProps} isoView={true} />
  })

  const loginHeaderMobileSearchbarButton = useMediaQuery(null, {
    md: <MainButton onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
  })

  const loginHeaderSearchbar = useMediaQuery(
    <Searchbar searchButtonProps={searchPropsButton} removeButtonProps={removePropsButton} {...searchbar} />,
    {
      md: null
    }
  )

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

  const loginHeaderPopover = useMediaQuery(
    <UserMenu listMenuUserProps={listMenuUserProps} profileImage={profileImage} />,

    {
      md: <Avatar {...profileImage} onClick={() => setToggleMobileDrawer(true)} />
    }
  )

  const loginHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs breadcrumbProps={breadcrumbProps} homeUrl={homeUrl} />, {
    md: null
  })

  return (
    <header className={styles.LoginHeaderComponent}>
      {loginHeaderMobileSearchbar}
      <div className={styles['magneto-ui-first-row']}></div>
      <div className={styles['magneto-ui-second-row']}>
        <div className={styles['magneto-ui-left-section']}>
          {loginHeaderMenuButton}
          <a href={homeUrl}>{loginHeaderLogo}</a>
          {loginHeaderMobileSearchbarButton}
        </div>
        <div className={styles['magneto-ui-searchbar-section']}>{loginHeaderSearchbar}</div>
        <div className={styles['magneto-ui-user-section']}>
          {loginHeaderOptionTabs}
          {loginHeaderPopover}
        </div>
      </div>
      <div className={styles['magneto-ui-third-row']}>{loginHeaderBreadcrumbs}</div>
      <MobileDrawer isOpen={toggleMobileDrawer} onClose={() => setToggleMobileDrawer(false)}>
        <ListMenuIcons {...listMenuUserProps} />
      </MobileDrawer>
    </header>
  )
}

/**
 * UI Organism Component for LoginHeader
 */

export const LoginHeader = Component
