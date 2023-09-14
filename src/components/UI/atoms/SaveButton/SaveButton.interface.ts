export interface ISaveButton {
  /**
   * Specifies whether the user is authenticated or not.
   */
  isAuthenticated: boolean
  /**
   * Specifies whether the item is currently saved or not.
   */
  isSaved: boolean
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
   * Specifies whether a hover effect should be added to the button.
   * (Optional property)
   */
  addHover?: boolean
}
