type itemType = 'button' | 'link'

export interface IMenuIcon {
  /**
   * You can set the icon here
   */
  icon?: string | undefined
  /**
   * Here is the menu text
   */
  text: string
  /**
   * This property with value true changes the styles
   */
  isActive?: boolean
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
  /**
   * This is the size for icon
   */
  size?: number
  /**
   * Class name of each menu icon type
   */
  className?: string
}
