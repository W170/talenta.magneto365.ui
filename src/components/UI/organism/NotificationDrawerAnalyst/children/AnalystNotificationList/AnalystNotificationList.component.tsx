import React from 'react'
import { AnalystNotificationCard } from './children/AnalystNotificationCard.component'
import styles from './AnalystNotificationList.module.scss'
import { useInfiniteNotifications } from '../../hooks'
import { FlatLoader } from '@components/UI/atoms'

export function AnalystNotificationList() {
  const { notifications, lastNotificationRef, isLoading } = useInfiniteNotifications()

  return (
    <div className={styles.analystNotificationList}>
      {notifications.map((notification, index) => {
        const isLast = index === notifications.length - 1
        return (
          <div key={notification.id} ref={isLast ? lastNotificationRef : null}>
            <AnalystNotificationCard notification={notification} />
          </div>
        )
      })}
      {isLoading && (
        <div className={styles.loader}>
          <FlatLoader color="#001B38" secondColor="transparent" size={45} />
        </div>
      )}
    </div>
  )
}
