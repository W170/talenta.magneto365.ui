import { IconProps as IconPropsIconsSax, Icon } from 'iconsax-react'

export interface IconProps extends IconPropsIconsSax {
  /**
   * Here is the assetsIcon component
   */
  assetsIcon?: string
  /**
   * Here is the icon component
   */
  Icon?: Icon
  /**
   * You can set the hover animation or disable
   */
  hover: boolean
  className?: string
  /**
   * You can change the size of the icon by adding a numeric value here
   */
  size?: number
  /**
   * You can change the color of the icon by adding a hexadecimal value here
   */
  color?: string
}
