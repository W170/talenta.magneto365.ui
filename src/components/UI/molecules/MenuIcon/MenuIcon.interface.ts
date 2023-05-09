import { Icon } from 'iconsax-react'

export interface IMenuIcon {
  /**
   * You must set the icon here
   */
  Icon: Icon
  /**
   * Here is the menu text
   */
  text: string
  /**
   * This property with value true changes the styles
   */
  isActive: boolean
  /**
   * You can add more spacing between icon and text
   */
  spacing?: number
  /**
   * Here is the url
   */
  url: string
  className?: string
}
