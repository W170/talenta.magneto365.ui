import { Icon } from 'iconsax-react'

type itemType = 'button' | 'link'

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
  isActive?: boolean
  /**
   * You can add more spacing between icon and text
   */
  spacing?: number
  /**
   * Here is the url
   */
  url?: string
  /**
   * Here is the url
   */
  slug?: string
  /**
   * You must specify the type between link or button
   */
  type?: itemType
  /**
   *You can add a function if the type is button
   */
  onClick?: () => void
  className?: string
}
