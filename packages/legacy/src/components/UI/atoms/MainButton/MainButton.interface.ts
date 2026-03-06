import { IconProps } from '../Icon'

type ButtonSizes = 'small' | 'medium' | 'large' | 'full'
type ButtonType = 'submit' | 'reset' | 'button'

export interface ButtonElement {
  /**
   * Sets the button color
   */
  buttonColor?: string
  /**
   * Sets the text color
   */
  textColor?: string
  /**
   * Sets a spacing between icon and text
   */
  spacing?: number | string
}

export interface IMainButton {
  /**
   * Sets button type
   */
  buttonType?: ButtonType
  /**
   * Sets the button size
   */
  buttonSize?: ButtonSizes
  /**
   * Sets the text inside button
   */
  buttonText?: string
  /**
   * Props for the Icon Atom
   */
  iconProps?: IconProps
  /**
   * Props for the Button Element
   */
  buttonStyles?: ButtonElement
  /**
   * Sets if button is mobile
   */
  isMobile?: boolean
  /**
   * Sets loading animation for button
   */
  loadingState?: boolean
  /**
   * Optional click handler
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (event: any) => void
  /**
   * This is the custom className
   */
  className?: string
  /**
   * This te title attribute for the button tag
   */
  title?: string
  /**
   * It specifies that the button should be disabled.
   */
  disabled?: boolean
}
