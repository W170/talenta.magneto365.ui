export interface ISaveButton {
  /**
   * Specifies whether the item is currently saved or not.
   */
  isSaved: boolean
  /**
   * Callback function to be executed when the save button is clicked.
   */
  onClick: () => void
}
