export interface IMessageProps {
  /**
   * Optional description of the message
   */
  description?: string
  /**
   * This is the optional duration in milliseconds
   * */
  duration?: number
  /**
   * This is the function to be called when the message is hidden
   */
  onHide?: (visible: boolean) => void
  /**
   * This is the main text in the message
   * */
  text: string
  /**
   * This is the type of message
   *  */
  type?: 'info' | 'success' | 'warning' | 'error'
  /**
   * Handles visibility of the message
   */
  visible?: boolean
}
