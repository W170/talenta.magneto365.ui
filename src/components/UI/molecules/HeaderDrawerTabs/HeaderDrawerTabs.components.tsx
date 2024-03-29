import React from 'react'
import { LogoComponent } from '../../atoms'
import { Tab } from '../Tab'
import { TabButton } from '../TabButton'
import { IHeaderDrawerTabs } from './HeaderDrawerTabs.interface'
import styles from './HeaderDrawerTabs.module.scss'

const Component: React.FC<IHeaderDrawerTabs> = ({
  logoProps,
  leftTabLink,
  rightTabLink,
  leftTabStyle,
  rightTabStyle,
  homeUrl
}) => {
  return (
    <div className={styles.HeaderDrawerTabsComponent}>
      <a href={homeUrl}>
        <LogoComponent {...logoProps} isoView />
      </a>
      <Tab>
        <TabButton
          tabButtonLink={leftTabLink}
          tabButtonLinkStyles={leftTabStyle?.tabButtonLinkStyles}
          tabButtonStyles={leftTabStyle?.tabButtonStyles}
        />
        <TabButton
          tabButtonLink={rightTabLink}
          tabButtonLinkStyles={rightTabStyle?.tabButtonLinkStyles}
          tabButtonStyles={rightTabStyle?.tabButtonStyles}
        />
      </Tab>
    </div>
  )
}

export const HeaderDrawerTabs = Component
