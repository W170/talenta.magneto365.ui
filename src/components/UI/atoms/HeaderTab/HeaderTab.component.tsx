import React from 'react'
import { IHeaderTab } from './HeaderTab.interface'
import { withStyles } from './HeaderTab.styles'

const Component: React.FC<IHeaderTab> = ({ tabType, url, tabText, className }) => {
  const TabLink = tabType === 'tabOption' ? url : '#'

  return (
    <a className={className} href={TabLink}>
      <p>{tabText}</p>
    </a>
  )
}

/**
 * UI Atom component for HeaderTab
 */

export const HeaderTab = withStyles(Component)
