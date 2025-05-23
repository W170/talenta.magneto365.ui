import { IAnalystNotification, IBaseNotification } from '../AnalystNotificationList.interface'

/**
 * Props for the notification card component rendered in the analyst drawer.
 */
export interface IAnalystNotificationCardProps {
  /**
   * Notification data to be displayed in the card
   */
  notification: IAnalystNotification
}

/**
 * Default props for a notification card, extending the base notification with a custom icon.
 */
export interface DefaultNotificationProps extends IBaseNotification {
  /**
   * Icon to be displayed alongside the notification
   */
  icon: string
}
