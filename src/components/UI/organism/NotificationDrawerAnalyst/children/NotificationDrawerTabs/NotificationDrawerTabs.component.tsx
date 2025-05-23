import { ScrollableTab } from '@components/UI/molecules/ScrollableTab'
import React from 'react'
import { INotificationDrawerTabs } from './NotificationDrawerTabs.interface'
import { TabItem } from '@components/UI/molecules/TabItem'

const Component: React.FC<INotificationDrawerTabs> = ({ sections }) => {
  return (
    <ScrollableTab>
      {sections.map((section, index) => (
        <TabItem key={section} text={section} isDisabled={index > 2} isSelected={index === 1} />
      ))}
    </ScrollableTab>
  )
}

export const NotificationDrawerTabs = Component
