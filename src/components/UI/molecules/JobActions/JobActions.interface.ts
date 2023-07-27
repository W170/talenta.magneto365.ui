export interface IJobsActions {
  /**
   * Sets the inside text of the button
   */
  actionButtonText: string
  /**
   * Sets the icons for the button actions
   */
  actionsButtonIcons?: string[]
  /**
   * Sets the event handlers for the button actions
   */
  actionsButtonEvents: (() => void)[]
  /**
   * Sets the icons for the link actions
   */
  actionsAnchorIcons?: string[]
  /**
   * Sets the links for the anchor actions
   */
  actionsAnchorLinks: string[]
  /**
   * Event handler for the apply click event
   */
  onHandleClick: () => void
}
