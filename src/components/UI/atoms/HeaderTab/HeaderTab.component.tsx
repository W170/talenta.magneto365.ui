import React from 'react'
import { IHeaderTab } from './HeaderTab.interface'
import { withStyles } from './HeaderTab.styles'

const Component: React.FC<IHeaderTab> = ({ tabType, url, tabText, className }) => {
  const TabLink = tabType === 'tabOption' ? url : ''

  return (
    <>
      {tabType === 'tabTitle' ? (
        <div className={className}>
          <p>{tabText}</p>
        </div>
      ) : (
        <a className={className} href={TabLink}>
          <p>{tabText}</p>
        </a>
      )}
    </>
  )
}

/**
 * UI Atom component for HeaderTab
 */

export const HeaderTab = withStyles(Component)
