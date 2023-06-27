import { IconProps } from '../Icon'

type ButtonSizes = 'small' | 'medium' | 'large' | 'full'
type ButtonType = 'submit' | 'reset' | 'button'

export interface ButtonElement {
  /**
   * Sets the button color
   */
  buttonColor?: string
  /**
   * Sets the text inside button
   */
  buttonText?: string
  /**
   * Sets the text color
   */
  textColor?: string
  /**
   * Sets a spacing between icon and text
   */
  spacing?: number
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
  onClick?: (event: any) => void
}
