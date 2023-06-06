import { IMainButton } from '../../atoms'
import { IHeaderDrawerTabs, IListIcon, IListMenuItems } from '../../molecules'

export interface IDrawerOrganism {
  className?: string
  /**
   * Here is the icon list component
   */
  listIcon: IListIcon[]
  /**
   * Here is the menu list component
   */
  listMenuProps: IListMenuItems
  /**
   * Here is drawer header tabs component
   */
  headerProps: IHeaderDrawerTabs
  /**
   * Here is main button component
   */
  createAccountButton: IMainButton
  /**
   * Here is main button component
   */
  loginButton: IMainButton
  /**
   *
   */
  onClose: () => void
  /**
   *
   */
  isOpen: boolean
}
