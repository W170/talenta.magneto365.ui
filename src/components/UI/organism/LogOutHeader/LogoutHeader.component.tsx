import React from 'react'
import { IconItem } from '../../atoms/Icon'
import { Link } from '../../atoms/Link'
import { LogoComponent } from '../../atoms/Logo'
import { MainButton } from '../../atoms/MainButton'
import { Breadcrumbs } from '../../molecules/Breadcrumbs'
import { Searchbar } from '../../molecules/Searchbar'
import { Tab } from '../../molecules/Tab'
import { ILogoutHeader } from './LogoutHeader.interface'
import { withStyles } from './LogoutHeader.styles'

const Component: React.FC<ILogoutHeader> = ({
  className,
  tabProps,
  iconProps,
  logoProps,
  searchbarProps,
  mainButtonProps,
  linkProps,
  breadcrumbsProps
}) => {
  return (
    <header className={className}>
      <section className="row1">
        <Tab {...tabProps} />
      </section>
      <section className="row2">
        <div className="logo-wrapper">
          <IconItem {...iconProps} />
          <LogoComponent {...logoProps} />
        </div>
        <Searchbar {...searchbarProps} />
        <div className="button-wrapper">
          <Link {...linkProps} />
          <MainButton {...mainButtonProps} />
        </div>
      </section>
      <section className="row3">
        <Breadcrumbs {...breadcrumbsProps} />
      </section>
    </header>
  )
}

/**
 * UI Header Organisim for 1024 resolution/size
 */

export const LogoutHeader = withStyles(Component)
