export interface InavigationButtonBar {
  /**
   * Indicates whether the navigation bar is active
   */
  active: boolean

  /**
   * Icon for the left button in the navigation bar
   */
  iconButtonLeft: string

  /**
   * Function to handle the click event of the center button in the navigation bar
   */
  onclickButtonCenter: () => void

  /**
   * Function to handle the click event of the left button in the navigation bar
   */
  onClickbuttonLeft?: () => void

  /**
   * Prefix text for the navigation bar
   */
  prefix?: string

  /**
   * Function to set the active state of the navigation bar
   */
  setActive: (value: boolean) => void

  /**
   * Suffix text for the navigation bar
   */
  sufix?: string

  /**
   * Text for the center button in the navigation bar
   */
  textButtonCenter: string
}
