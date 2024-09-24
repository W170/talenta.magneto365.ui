export interface IButtonLink {
  /**
   * Optional text to be displayed on the save button.
   * (Optional property)
   */
  buttonText?: string
  /**
   * Callback function to be executed when the save button is clicked.
   */
  onClick?: () => void
  /**
   * Button classname
   */
  className?: string
  /**
   * Suffix icon
   */
  suffixIcon?: string
  /**
   * Preffix icon
   */
  prefixIcon?: string
  /**
   * Icon size
   */
  iconSize?: number
  /**
   *  Sets href for link
   */
  href?: string
  /**
   * Relationship when opening the link
   */
  rel?: string
  /**
   * Target when opening the link
   */
  target?: string
}
