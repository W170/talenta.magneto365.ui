import React from 'react'
import { IAnalystNotificationListProps } from './AnalystNotificationList.interface'
import { AnalystNotificationCard } from './children/AnalystNotificationCard.component'
import styles from './AnalystNotificationList.module.scss'

export function AnalystNotificationList({ notifications }: IAnalystNotificationListProps) {
  return (
    <div className={styles.analystNotificationList}>
      {notifications.map((notification) => (
        <AnalystNotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  )
}
