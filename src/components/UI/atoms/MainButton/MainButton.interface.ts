import { IconProps } from '../Icon'

type ButtonSizes = 'small' | 'medium' | 'large' | 'full'
type ButtonType = 'submit' | 'reset' | 'button'

export interface IMainButton {
  /**
   * Sets button type
   */
  buttonType: ButtonType
  /**
   * Sets the button size
   */
  buttonSize?: ButtonSizes
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Props for the Icon Atom
   */
  iconProps: IconProps
  /**
   * Sets the text inside button
   */
  buttonText?: string
  /**
   * Setx the button color
   */
  buttonColor?: string
  /**
   * Sets the text color
   */
  textColor?: string
  className?: string
}
