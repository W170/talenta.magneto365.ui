export interface IButton {
  /**
   * Optional text to be displayed on the save button.
   * (Optional property)
   */
  buttonText?: string
  /**
   * Callback function to be executed when the save button is clicked.
   */
  onClick: () => void
  /**
   * Button classname
   */
  className?: string
  /**
   * Specifies whether a hover effect should be added to the button.
   * (Optional property)
   */
  addHover?: boolean
  /**
   * The title or label associated with the button.
   */
  buttonTitle?: string
  /**
   * Suffix icon
   */
  suffixIcon?: string | React.ReactNode
  /**
   * Preffix icon
   */
  prefixIcon?: string | React.ReactNode
  /**
   * Icon size
   */
  iconSize?: number
}
