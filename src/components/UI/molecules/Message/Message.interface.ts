import { IconProps } from '@components/UI/atoms'

export interface IMessageProps {
  /**
   * Optional class name
   */
  className?: string
  /**
   * Optional description of the message
   */
  description?: string
  /**
   * This is the optional duration in milliseconds
   * */
  duration?: number
  /**
   * Optional props for the icon
   */
  iconProps?: IconProps
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
