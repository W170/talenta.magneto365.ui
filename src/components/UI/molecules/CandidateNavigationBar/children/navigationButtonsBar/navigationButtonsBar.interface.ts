export interface InavigationButtonBar {
  /**
   * Indicates whether the navigation bar is active
   */
  active: boolean
  /**
   * Color prefix Button Left of Candidate navigation bar
   */
  colorPrefix?: string

  /**
   * Color sufix Button Left of Candidate navigation bar
   */
  colorSufix?: string

  /**
   * Icon for the left button in the navigation bar
   */
  iconButtonLeft: string

  /**
   * Icon for the left button in the navigation bar
   */
  colorIconButtonLeft: string

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

export enum NAVIGATION_BAR_BUTTONS_ICONS_COLOR {
  WHITE = 'white',
  BLACK = 'black'
}
