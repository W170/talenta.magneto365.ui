import { ImenuOptions } from '../../candidateNavigationBar.interface'

export interface INavigationBarMenu {
  /**
   * Indicates whether the navigation bar is active
   */
  active: boolean
  /**
   * Menu options of Candidate navigation bar
   */
  menuOptions: ImenuOptions[]
  /**
   * Menu slide function
   */
  onSwipeDown: () => void
}

export enum NAVIGATION_BAR_MENU_ICONS_COLOR {
  DARK_BLUE = 'dark-blue',
  WHITE = 'white',
  BLACK = 'black'
}
