import React, { useState } from 'react'
import { Avatar } from '../../atoms'
import { LogoComponent } from '../../atoms'
import { MainButton } from '../../atoms'
import { Breadcrumbs, UserMenu } from '../../molecules'
import { HeaderTabs } from '../../molecules'
import { ListMenuIcons } from '../../molecules'
import { MobileDrawer } from '../../molecules'
import { MobileSearchbar } from '../../molecules'
import { Searchbar } from '../../molecules'
import { ILoginHeader } from './LoginHeader.interface'
import { withStyles } from './LoginHeader.styles'
import { useMediaQuery } from '../../../hooks'

import {
  LogoProps,
  MenuButtonProps,
  MobileSearchbarButtonProps,
  searchPropsButton,
  removePropsButton
} from '../../../../constants/stories.constants'

const Component: React.FC<ILoginHeader> = ({
  onClick,
  className,
  listMenuUserProps,
  breadcrumbText,
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

  const loginHeaderLogo = useMediaQuery(<LogoComponent {...LogoProps} />, {
    sm: <LogoComponent {...LogoProps} isoView={true} />
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
      lg: null
    }
  )

  const loginHeaderPopover = useMediaQuery(
    <UserMenu listMenuUserProps={listMenuUserProps} profileImage={profileImage} />,

    {
      md: <Avatar {...profileImage} onClick={() => setToggleMobileDrawer(true)} />
    }
  )

  const loginHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs breadcrumbText={breadcrumbText} />, {
    md: null
  })

  return (
    <header className={className}>
      {loginHeaderMobileSearchbar}
      <div className="magneto-ui-first-row"></div>
      <div className="magneto-ui-second-row">
        <div className="magneto-ui-left-section">
          {loginHeaderMenuButton}
          <a href={homeUrl}>{loginHeaderLogo}</a>
          {loginHeaderMobileSearchbarButton}
        </div>
        <div className="magneto-ui-searchbar-section">{loginHeaderSearchbar}</div>
        <div className="magneto-ui-user-section">
          {loginHeaderOptionTabs}
          {loginHeaderPopover}
        </div>
      </div>
      <div className="magneto-ui-third-row">{loginHeaderBreadcrumbs}</div>
      <MobileDrawer isOpen={toggleMobileDrawer} onClose={() => setToggleMobileDrawer(false)}>
        <ListMenuIcons {...listMenuUserProps} />
      </MobileDrawer>
    </header>
  )
}

/**
 * UI Organism Component for LoginHeader
 */

export const LoginHeader = withStyles(Component)
