import React from 'react'
import { ILogoutHeader } from './LogoutHeader.interface'
import { withStyles } from './LogoutHeader.styles'
import { Breadcrumbs } from '../../molecules/Breadcrumbs'
import { Tab } from '../../molecules/Tab'
import { Searchbar } from '../../molecules/Searchbar'
import { Link } from '../../atoms/Link'
import { MainButton } from '../../atoms/MainButton'
import { LogoComponent } from '../../atoms/Logo'
import { IconItem } from '../../atoms/Icon'

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
