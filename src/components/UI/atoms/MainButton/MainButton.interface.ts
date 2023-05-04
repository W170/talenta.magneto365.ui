import { IconProps } from '../Icon'

export interface IMainButton {
  /**
   * Children Props
   */
  childrenProps: IconProps
  /**
   * Text content of the button
   */
  buttonText: string
  /**
   * Button color
   */
  btnColor?: string
  /**
   * Text Color
   */
  textColor?: string
  /**
   * How large should the button be?
   */
  btnSize?: 'small' | 'medium' | 'large'
  /**
   * Optional click handler
   */
  onClick?: () => void
  className?: string
}
