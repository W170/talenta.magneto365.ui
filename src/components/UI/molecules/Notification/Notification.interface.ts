/**
 * Defines the position of the Notification component
 */
type NotificationPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

/**
 * Interface for Notification component props
 */
export interface INotification {
  /**
   * Callback function to close the notification
   */
  onClose: () => void
  /**
   * Message to display in the notification
   */
  message?: React.ReactNode
  /**
   * Position where the notification will appear
   */
  position?: NotificationPosition
  /**
   * Custom class for styling the notification container
   */
  className?: string
  /**
   * Duration in milliseconds before auto-closing the notification
   */
  autoCloseDuration?: number
  /**
   * Extra content to display in the notification
   */
  extraContent?: React.ReactNode
}
