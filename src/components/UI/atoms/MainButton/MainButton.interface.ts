import { IconProps } from '../Icon'

type ButtonSizes = 'small' | 'medium' | 'large' | 'full'
type ButtonType = 'submit' | 'reset' | 'button'

export interface IMainButton {
  /**
   * Sets button type
   */
  buttonType?: ButtonType
  /**
   * Props for the Icon Atom
   */
  iconProps?: IconProps
  /**
   * Setx the button color
   */
  buttonColor?: string
  /**
   * Sets the button size
   */
  buttonSize?: ButtonSizes
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
  /**
   * Sets if button is mobile
   */
  isMobile?: boolean
  /**
   * Optional click handler
   */
  onClick?: () => void
  className?: string
}
