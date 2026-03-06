export interface IMenuItem {
  className?: string
  /**
   * Put a url direction
   */
  url: string
  /**
   * This property set to true can change styles
   */
  isActive: boolean
  /**
   * This is the menu text
   */
  text: string
}
