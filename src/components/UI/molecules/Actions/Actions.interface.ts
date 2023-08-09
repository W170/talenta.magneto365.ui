export interface IActions {
  /**
   * An array of string icons to be displayed for each button in the actions section.
   * (Optional property)
   */
  ActionsButtonIcons?: string[]
  /**
   * An array of callback functions to be executed when each button in the actions section is clicked.
   */
  ActionsButtonEvents: (() => void)[]
  /**
   * An array of string icons to be displayed for each anchor link in the actions section.
   * (Optional property)
   */
  ActionsAnchorIcons?: string[]
  /**
   * An array of string URLs representing anchor links for each item in the actions section.
   */
  ActionsAnchorLinks: string[]
  /**
   * An array of string text to be displayed on each button in the actions section.
   * (Optional property)
   */
  ActionButtonText?: string[]
  /**
   * An array of string text to be displayed on each anchor link in the actions section.
   * (Optional property)
   */
  ActionAnchorText?: string[]
  /**
   * Specifies whether the actions section is being displayed on a mobile device.
   * (Optional property)
   */
  isMobile?: boolean
  /**
   * The header or title for the actions section.
   */
  ActionsHeader: string
  /**
   * The text to be displayed on the main button of the actions section.
   */
  ButtonText: string
  /**
   * Callback function to be executed when the main button in the actions section is clicked.
   */
  onHandleClick: () => void
}
