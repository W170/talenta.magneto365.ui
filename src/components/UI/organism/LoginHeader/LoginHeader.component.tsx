import React, { useMemo, useState, useCallback } from 'react'
import { useMediaQuery } from '../../../hooks'
import { Avatar, LogoComponent, MainButton } from '../../atoms'
import { Breadcrumbs, HeaderTabs, ListMenuIcons, MobileDrawer, MobileSearchbar, UserMenu } from '../../molecules'
import { ILoginHeader } from './LoginHeader.interface'

import styles from './LoginHeader.modules.scss'

import MegaMenuSearchBar from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.component'
import { SearchButton } from '@components/UI/molecules/SearchButton'
import { logoProps, MenuButtonProps, MobileSearchbarButtonProps } from '@constants/stories'
import { IMegaMenuSearchBar, ISearchBar } from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.interface'
import SearchBar from '@components/UI/molecules/MegaMenuSearchBar/SearchBar.component'

const isMegaSearchbar = (searchbar: ISearchBar | IMegaMenuSearchBar): searchbar is IMegaMenuSearchBar => {
  return 'occupation' in searchbar
}

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

  const isMega = isMegaSearchbar(searchbar)
  const source = isMega ? searchbar.occupation : searchbar
  const searchValue = source.termValue

  const toggleSearchBar = useCallback(() => {
    setShowSearchBar((prev) => !prev)
    setToggleMobileDrawer(false)
  }, [])

  const mobileSearchbarValues = useMemo(() => {
    const { termValue, placeholder, onSearch, options, onSelectOption, onSubmit } = source

    return {
      ...MobileSearchbarProps,
      termValue,
      placeholder,
      onSearch,
      options,
      onSelectOption,
      onSubmit
    }
  }, [source, MobileSearchbarProps])

  const loginHeaderMobileSearchbar = useMediaQuery(null, {
    md: (
      <MobileSearchbar
        {...mobileSearchbarValues}
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
    md: <SearchButton searchValue={searchValue} onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
  })

  const loginHeaderSearchbar = useMediaQuery(
    isMega ? <MegaMenuSearchBar {...searchbar} /> : <SearchBar {...searchbar} />,
    { md: null }
  )

  const loginHeaderOptionTabs = useMediaQuery(
    <>
      <HeaderTabs {...jobsTabsProps} />
      <HeaderTabs {...processTabsProps} />
      <HeaderTabs {...curriculumTabProps} />
    </>,
    { xl: null }
  )

  const loginHeaderPopover = useMediaQuery(
    <UserMenu listMenuUserProps={{ ...listMenuUserProps, showAllItems: onlyMenuUser }} profileImage={profileImage} />,
    { md: <Avatar {...profileImage} onClick={() => setToggleMobileDrawer(true)} /> }
  )

  const loginHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs breadcrumbProps={breadcrumbProps} homeUrl={homeUrl} />, {
    md: null
  })

  return (
    <header className={styles.LoginHeaderComponent}>
      {loginHeaderMobileSearchbar}
      <div className={styles['magneto-ui-first-row']} />
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
