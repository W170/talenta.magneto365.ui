import React, { useState } from 'react'
import { useMediaQuery } from '../../../hooks'
import { Avatar, LogoComponent, MainButton } from '../../atoms'
import {
  Breadcrumbs,
  HeaderTabs,
  ListMenuIcons,
  MobileDrawer,
  MobileSearchbar,
  Searchbar,
  UserMenu
} from '../../molecules'
import { ILoginHeader } from './LoginHeader.interface'

import styles from './LoginHeader.modules.scss'

import MegaMenuSearchBar from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.component'
import { SearchButton } from '@components/UI/molecules/SearchButton'
import {
  logoProps,
  MenuButtonProps,
  MobileSearchbarButtonProps,
  removePropsButton,
  searchPropsButton
} from '@constants/stories'
import { IMegaMenuSearchBar } from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.interface'

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
  homeUrl,
  onlyMenuUser
}) => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState(false)

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }
  const isLoginHeaderSearch = (searchbar: any): searchbar is IMegaMenuSearchBar => {
    return typeof searchbar.occupation === 'object' && searchbar.occupation !== null
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

  const loginHeaderSearchbar = useMediaQuery(
    isLoginHeaderSearch(searchbar) ? (
      <MegaMenuSearchBar {...searchbar} />
    ) : (
      <Searchbar {...searchbar} searchButtonProps={searchPropsButton} removeButtonProps={removePropsButton} />
    ),
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
    <UserMenu listMenuUserProps={{ ...listMenuUserProps, showAllItems: onlyMenuUser }} profileImage={profileImage} />,
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
          {!onlyMenuUser && loginHeaderOptionTabs}
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
