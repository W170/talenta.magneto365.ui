import React, { useState } from 'react'
import { TabItem } from '@components/UI/molecules/TabItem'
import { ScrollableTab } from '@components/UI/molecules/ScrollableTab'
import { INotificationDrawerTabs } from './NotificationDrawerTabs.interface'
import styles from './NotificationDrawerTabs.module.scss'
import { Tooltip } from '@components/UI/molecules'

const Component: React.FC<INotificationDrawerTabs> = ({ sections, tooltipText }) => {
  const [selectedTab, setSelectedTab] = useState('all')

  return (
    <ScrollableTab className={styles['magneto-ui-notification-drawer-tabs']}>
      {Object.entries(sections).map(([key, section]) => (
        <Tooltip key={key} position="bottom" visible={section.isDisabled} title={tooltipText}>
          <TabItem
            text={section.label}
            isDisabled={section.isDisabled}
            isSelected={key === selectedTab}
            onClick={() => setSelectedTab(key)}
          />
        </Tooltip>
      ))}
    </ScrollableTab>
  )
}

export const NotificationDrawerTabs = Component
