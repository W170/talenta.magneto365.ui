import React, { useState } from 'react'
import { Link } from '../../atoms/Link'
import { LogoComponent } from '../../atoms/Logo'
import { MainButton } from '../../atoms/MainButton'
import { Breadcrumbs } from '../../molecules/Breadcrumbs'
import { Tab } from '../../molecules/Tab'
import { ILogoutHeader } from './LogoutHeader.interface'
import { withStyles } from './LogoutHeader.styles'

import { MobileSearchbar } from '../../molecules/MobileSearchbar'
import { withContextAppProvider } from '../../../context/context.component'
import { useMediaQuery } from '../../../hooks'
import { Searchbar } from '../../molecules/Searchbar'

const Component: React.FC<ILogoutHeader> = ({
  menuProps,
  openProps,
  tabProps,
  logoProps,
  mobileProps,
  searchbarProps,
  mainButtonProps,
  linkProps,
  breadcrumbsProps,
  className,
  onClick
}) => {
  const [showForm, setShowForm] = useState(false)

  const openForm = () => {
    setShowForm(!showForm)
  }

  const responsiveTab = useMediaQuery(
    <section className="magneto-ui-row1">
      <Tab {...tabProps} />
    </section>,
    {
      md: null
    }
  )

  const responsiveBreadcrumbs = useMediaQuery(
    <section className="magneto-ui-row3">
      <Breadcrumbs {...breadcrumbsProps} />
    </section>,
    {
      md: null
    }
  )

  const responsiveOpenButton = useMediaQuery(null, {
    md: <MainButton onClick={openForm} {...openProps} />
  })

  const searchbar = useMediaQuery(
    <div className="magneto-ui-searchbar-wrapper">
      <Searchbar {...searchbarProps} />
    </div>,
    {
      md: null
    }
  )

  const responsiveLogo = useMediaQuery(<LogoComponent {...logoProps} />, {
    sm: <LogoComponent {...logoProps} isoView={true} />
  })

  const isMobileButton = useMediaQuery(false, {
    md: true
  })

  return (
    <div className={className}>
      {responsiveTab}
      <MobileSearchbar {...mobileProps} onClick={() => setShowForm(false)} toggle={showForm} />
      <section className="magneto-ui-row2">
        <div className="magneto-ui-logo-wrapper">
          <MainButton {...menuProps} onClick={onClick} />
          {responsiveLogo}
          {responsiveOpenButton}
        </div>
        {searchbar}
        <div className="magneto-ui-button-wrapper">
          <Link {...linkProps} isMobile={isMobileButton} />
          <MainButton {...mainButtonProps} isMobile={isMobileButton} spacing={10} />
        </div>
      </section>
      {responsiveBreadcrumbs}
    </div>
  )
}

/**
 * UI Header Organisim for 1024 resolution/size
 */

export const LogoutHeader = withContextAppProvider(withStyles(Component))
