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
  listMenuUserProps
} from '../../../../constants/stories.constants'
import { MobileSearchbar } from '../../molecules/MobileSearchbar'
import { MainButton } from '../../atoms/MainButton'
import { Breadcrumbs } from '../../molecules/Breadcrumbs'
import { Searchbar } from '../../molecules/Searchbar'
import { LogoComponent } from '../../atoms/Logo'
import { withStyles } from './LoginHeader.styles'
import { Avatar } from '../../atoms/Avatar'
import { HeaderTabs } from '../../molecules/HeaderTabs/HeaderTabs.component'
import { HeaderTab } from '../../atoms/HeaderTab'
import { Popover } from '../../atoms/Popover'
import { ListMenuIcons } from '../../molecules/ListMenuIcons'
import { MobileDrawer } from '../../molecules/MobileDrawer'

const Component: React.FC<ILoginHeader> = ({ onClick, className }) => {
  const [showForm, setShowForm] = useState(false)
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState(false)
  const [showPopover, setShowPopover] = useState(false)

  const openForm = () => {
    setShowForm(!showForm)
  }

  const responsiveBreadcrumbs = useMediaQuery(
    <section className="magneto-ui-row3">
      <Breadcrumbs {...BreadcrumbsProps} />
    </section>,
    {
      md: null
    }
  )

  const responsiveHeaderTabs = useMediaQuery(
    <div className="magneto-ui-tabs-wrapper">
      <HeaderTabs {...JobsTabsProps} />
      <HeaderTabs {...ProcessTabsProps} />
      <HeaderTab {...CurriculumTabProps} />
    </div>,
    {
      xl: null
    }
  )

  const responsiveOpenButton = useMediaQuery(null, {
    md: <MainButton onClick={openForm} {...MenuButtonProps} />
  })

  const searchbar = useMediaQuery(
    <div className="magneto-ui-searchbar-wrapper">
      <Searchbar {...SearchbarProps} />
    </div>,
    {
      md: null
    }
  )

  const responsiveLogo = useMediaQuery(<LogoComponent {...LogoProps} />, {
    sm: <LogoComponent {...LogoProps} isoView={true} />
  })

  const responsivePopover = useMediaQuery(
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

  return (
    <header className={className}>
      <MobileSearchbar {...MobileSearchbarProps} onClick={() => setShowForm(false)} showMobileSearchbar={showForm} />
      <section className="magneto-ui-row2">
        <div className="magneto-ui-logo-wrapper">
          <MainButton {...MenuButtonProps} onClick={onClick} />
          {responsiveLogo}
          {responsiveOpenButton}
        </div>
        {searchbar}
        {responsiveHeaderTabs}
        <div className="magneto-ui-user-wrapper">{responsivePopover}</div>
      </section>
      {responsiveBreadcrumbs}
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
