export interface IShareButton {
  /**
   * The title or label associated with the button.
   * (Optional property)
   */
  buttonTitle?: string
  /**
   * The text to be displayed on the share button.
   * (Optional property)
   */
  buttonText?: string
  /**
   * Specifies whether a hover effect should be added to the button.
   * (Optional property)
   */
  addHover?: boolean
  /**
   * The URL to share when the button is clicked.
   * (Optional property)
   */
  detailUrl?: string
  /**
   * Callback function to be executed when copying is successful.
   */
  onCopySuccess: () => void
  /**
   * Callback function to be executed when copying encounters an error.
   * (Optional property)
   */
  onCopyError?: () => void

  className?: string
}
