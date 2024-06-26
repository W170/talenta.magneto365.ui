import React from 'react'
import { HeaderTab } from '../../atoms'
import { IHeaderTabs } from './HeaderTabs.interface'
import styles from './HeaderTabs.modules.scss'

const Component: React.FC<IHeaderTabs> = ({ headerTabList = [], urlParam = '', addDivider }) => {
  return (
    <div className={styles.HeaderTabsComponent} data-add-divider={addDivider}>
      {headerTabList.map(({ ...headerTabProps }, index: number) => (
        <React.Fragment key={index}>
          <HeaderTab
            {...headerTabProps}
            isActive={
              Array.isArray(headerTabProps.slug)
                ? headerTabProps.slug.includes(urlParam)
                : urlParam === headerTabProps.slug
            }
          />
        </React.Fragment>
      ))}
    </div>
  )
}

/**
 * Molecule UI component for header tabs information`
 */

export const HeaderTabs = Component
