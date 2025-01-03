import { ImenuOptions } from '../../candidateNavigationBar.interface'

export interface INavigationBarMenu {
  active: boolean
  menuOptions: ImenuOptions[]
  onSwipeDown: () => void
}
