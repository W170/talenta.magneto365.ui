import React, { useState } from 'react'
import { ILoginHeader } from './LoginHeader.interface'
import { useMediaQuery } from '../../../hooks'
import {
  BreadcrumbsProps,
  SearchbarProps,
  LogoProps,
  MobileSearchbarProps,
  MenuButtonProps,
  AvatarProps,
  JobsTabsProps,
  ProcessTabsProps,
  CurriculumTabProps,
  listMenuUserProps,
  MobileSearchbarButtonProps
} from '../../../../constants/stories.constants'
import { MobileSearchbar } from '../../molecules/MobileSearchbar'
import { MainButton } from '../../atoms/MainButton'
import { Breadcrumbs } from '../../molecules/Breadcrumbs'
import { Searchbar } from '../../molecules/Searchbar'
import { LogoComponent } from '../../atoms/Logo'
import { withStyles } from './LoginHeader.styles'
import { Avatar } from '../../atoms/Avatar'
import { HeaderTabs } from '../../molecules/HeaderTabs/HeaderTabs.component'
import { Popover } from '../../atoms/Popover'
import { ListMenuIcons } from '../../molecules/ListMenuIcons'
import { MobileDrawer } from '../../molecules/MobileDrawer'

const Component: React.FC<ILoginHeader> = ({ onClick, className }) => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState(false)
  const [showPopover, setShowPopover] = useState(false)

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

  const loginHeaderSearchbar = useMediaQuery(<Searchbar {...SearchbarProps} />, {
    md: null
  })

  const loginHeaderOptionTabs = useMediaQuery(
    <>
      <HeaderTabs {...JobsTabsProps} />
      <HeaderTabs {...ProcessTabsProps} />
      <HeaderTabs {...CurriculumTabProps} />
    </>,
    {
      xl: null
    }
  )

  const loginHeaderPopover = useMediaQuery(
    <Popover
      show={showPopover}
      content={<ListMenuIcons {...listMenuUserProps} />}
      width={300}
      positionX="left"
      positionY="bottom"
    >
      <Avatar {...AvatarProps} onClick={() => setShowPopover(!showPopover)} />
    </Popover>,

    {
      md: <Avatar {...AvatarProps} onClick={() => setToggleMobileDrawer(true)} />
    }
  )

  const loginHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs {...BreadcrumbsProps} />, {
    md: null
  })

  return (
    <header className={className}>
      {loginHeaderMobileSearchbar}
      <div className="magneto-ui-first-row"></div>
      <div className="magneto-ui-second-row">
        <div className="magneto-ui-left-section">
          {loginHeaderMenuButton}
          {loginHeaderLogo}
          {loginHeaderMobileSearchbarButton}
        </div>
        <div className="magneto-ui-searchbar-section">{loginHeaderSearchbar}</div>
        <div className="magneto-ui-tabs-section">{loginHeaderOptionTabs}</div>
        <div className="magneto-ui-right-section">{loginHeaderPopover}</div>
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
