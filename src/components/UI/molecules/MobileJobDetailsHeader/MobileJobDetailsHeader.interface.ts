/**
 * This interface represents the header of a mobile job details component.
 */
export interface IMobileJobDetailsHeader {
  /**
   * The text to display for the return button.
   */
  returnText: string
  /**
   * Callback function to be executed when the return button is clicked.
   */
  onClick: () => void
}
