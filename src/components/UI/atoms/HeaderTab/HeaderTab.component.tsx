import React from 'react'
import { IHeaderTab } from './HeaderTab.interface'
import styles from './HeaderTab.modules.scss'

const Component: React.FC<IHeaderTab> = ({ tabType, tabText, url, isActive }) => {
  const TabLink = tabType === 'tabOption' ? url : ''

  return (
    <>
      {tabType === 'tabTitle' ? (
        <div className={styles.headerTabComponent} data-tab-type="tabTitle">
          <p>{tabText}</p>
        </div>
      ) : (
        <a className={styles.headerTabComponent} href={TabLink} data-tab-type="tabOption" data-is-active={isActive}>
          <p>{tabText}</p>
        </a>
      )}
    </>
  )
}

/**
 * UI Atom component for HeaderTab
 */

export const HeaderTab = Component
