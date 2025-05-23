/**
 * Types of notifications that can be displayed to the analyst.
 */
export type INotificationType = 'requests' | 'candidateManagement' | 'vacancyStatuses' | 'interviews'

/**
 * Possible events related to requests.
 */
export type IRequestEvent = 'created' | 'assigned' | 'named' | 'rejected'

/**
 * Possible events related to candidate management.
 */
export type ICandidateManagementEvent = 'matchFound'

/**
 * Base notification structure shared by all notification types.
 */
export interface IBaseNotification {
  /**
   * Unique identifier for the notification
   */
  id: string
  /**
   * Timestamp when the notification was created (ISO string)
   */
  timestamp: string
  /**
   * Whether the notification has been read
   */
  read: boolean
  /**
   * Notification title to be displayed
   */
  title: string
  /**
   * Optional array of lines describing the notification content
   */
  descriptionLines?: string[][]
  /**
   * Action to be triggered when interacting with the notification
   */
  action: () => void
  /**
   * Text to be shown in the action button
   */
  actionTitle: string
}

/**
 * Notification specifically related to requests.
 */
export interface IRequestNotification extends IBaseNotification {
  /**
   * Type discriminator for requests
   */
  type: 'requests'
  /**
   * Specific event within the requests category
   */
  event: IRequestEvent
}

/**
 * Notification specifically related to candidate management.
 */
export interface ICandidateManagementNotification extends IBaseNotification {
  /**
   * Type discriminator for candidate management
   */
  type: 'candidateManagement'
  /**
   * Specific event within the candidate management category
   */
  event: ICandidateManagementEvent
}

/**
 * Union type of all possible analyst notifications.
 */
export type IAnalystNotification = IRequestNotification | ICandidateManagementNotification

/**
 * Props for the AnalystNotificationList component.
 */
export interface IAnalystNotificationListProps {
  /**
   * Array of notifications to be rendered
   */
  notifications: IAnalystNotification[]
}
