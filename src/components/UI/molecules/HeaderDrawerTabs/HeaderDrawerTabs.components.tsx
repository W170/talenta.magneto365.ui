import React from 'react'
import { LogoComponent } from '../../atoms'
import { Tab } from '../Tab'
import { TabButton } from '../TabButton'
import { IHeaderDrawerTabs } from './HeaderDrawerTabs.interface'
import { withStyles } from './HeaderDrawerTabs.styles'
import { useMediaQuery } from '../../../hooks'

const Component: React.FC<IHeaderDrawerTabs> = ({
  logoProps,
  leftTabLink,
  rightTabLink,
  leftTabStyle,
  rightTabStyle,
  className
}) => {
  const isMobileLogo = useMediaQuery(false, {
    md: true
  })

  return (
    <div className={className}>
      {logoProps && <LogoComponent isoView={isMobileLogo} {...logoProps} />}
      <Tab>
        <TabButton tabButtonLink={leftTabLink} tabButtonStyle={leftTabStyle?.tabButtonStyle} />
        <TabButton tabButtonLink={rightTabLink} tabButtonStyle={rightTabStyle?.tabButtonStyle} />
      </Tab>
    </div>
  )
}

export const HeaderDrawerTabs = withStyles(Component)
