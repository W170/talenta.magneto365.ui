import React from 'react'
import { LogoComponent } from '../../atoms/Logo'
import { Tab } from '../Tab'
import { IHeaderDrawerTabs } from './HeaderDrawerTabs.interface'
import { withStyles } from './HeaderDrawerTabs.styles'
import { useMediaQuery } from '../../../hooks'

const Component: React.FC<IHeaderDrawerTabs> = ({ className, tabProps, logoProps }) => {
  const isMobileLogo = useMediaQuery(false, {
    md: true
  })

  return (
    <div className={className}>
      <LogoComponent isoView={isMobileLogo} {...logoProps} />
      <Tab {...tabProps} />
    </div>
  )
}

export const HeaderDrawerTabs = withStyles(Component)
