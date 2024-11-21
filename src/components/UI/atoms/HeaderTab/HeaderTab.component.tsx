import React from 'react'
import { IHeaderTab } from './HeaderTab.interface'
import styles from './HeaderTab.modules.scss'
import { Badge } from '../Badge'

const Component: React.FC<IHeaderTab> = ({ tabType, tabText, url, isActive, count = 0 }) => {
  const TabLink = tabType === 'tabOption' ? url : ''

  return (
    <>
      {tabType === 'tabTitle' ? (
        <div className={styles.headerTabComponent} data-tab-type="tabTitle">
          {count > 0 && <Badge number={count} className={styles['headerTabComponent__count']} />}
          <p className={styles['headerTabComponent__text']}>{tabText}</p>
        </div>
      ) : (
        <a className={styles.headerTabComponent} href={TabLink} data-tab-type="tabOption" data-is-active={isActive}>
          {count > 0 && <Badge number={count} className={styles['headerTabComponent__count']} />}
          <p className={styles['headerTabComponent__text']}>{tabText}</p>
        </a>
      )}
    </>
  )
}

/**
 * UI Atom component for HeaderTab
 */

export const HeaderTab = Component
