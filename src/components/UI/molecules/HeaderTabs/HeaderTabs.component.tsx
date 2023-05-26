import React from 'react'
import { HeaderTab } from '../../atoms'
import { IHeaderTabs } from './HeaderTabs.interface'
import { withStyles } from './HeaderTabs.styles'

const Component: React.FC<IHeaderTabs> = ({ headerTabList = [], urlParam = '', className }) => {
  return (
    <div className={className}>
      {headerTabList.map(({ ...headerTabProps }, index: number) => (
        <React.Fragment key={index}>
          <HeaderTab {...headerTabProps} isActive={urlParam === headerTabProps.slug ? true : false} />
        </React.Fragment>
      ))}
    </div>
  )
}

/**
 * Molecule UI component for header tabs information`
 */

export const HeaderTabs = withStyles(Component)
