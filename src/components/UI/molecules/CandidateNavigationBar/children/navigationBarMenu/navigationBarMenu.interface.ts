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
