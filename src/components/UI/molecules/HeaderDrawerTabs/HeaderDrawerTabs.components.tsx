import React from 'react'
import { LogoComponent } from '../../atoms'
import { Tab } from '../Tab'
import { TabButton } from '../TabButton'
import { IHeaderDrawerTabs } from './HeaderDrawerTabs.interface'
import { useMediaQuery } from '../../../hooks'
import styles from './HeaderDrawerTabs.module.scss'

const Component: React.FC<IHeaderDrawerTabs> = ({
  logoProps,
  leftTabLink,
  rightTabLink,
  leftTabStyle,
  rightTabStyle,
  homeUrl
}) => {
  const isMobileLogo = useMediaQuery(false, {
    md: true
  })

  return (
    <div className={styles.magnetoUiHeaderDrawer}>
      <a href={homeUrl}>
        <LogoComponent isoView={isMobileLogo} {...logoProps} />
      </a>
      <Tab>
        <TabButton tabButtonLink={leftTabLink} tabButtonStyle={leftTabStyle?.tabButtonStyle} />
        <TabButton tabButtonLink={rightTabLink} tabButtonStyle={rightTabStyle?.tabButtonStyle} />
      </Tab>
    </div>
  )
}

export const HeaderDrawerTabs = Component
