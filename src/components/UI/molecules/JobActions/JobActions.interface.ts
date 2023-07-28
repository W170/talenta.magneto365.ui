export interface IJobsActions {
  /**
   * The text to be displayed on the main action button.
   */
  actionButtonText: string
  /**
   * An array of string icons to be displayed for each button in the actions section.
   * (Optional property)
   */
  actionsButtonIcons?: string[]
  /**
   * An array of callback functions to be executed when each button in the actions section is clicked.
   */
  actionsButtonEvents: (() => void)[]
  /**
   * An array of string icons to be displayed for each anchor link in the actions section.
   * (Optional property)
   */
  actionsAnchorIcons?: string[]
  /**
   * An array of string URLs representing anchor links for each item in the actions section.
   */
  actionsAnchorLinks: string[]
  /**
   * Callback function to be executed when the main action button is clicked.
   */
  onHandleClick: () => void
}
