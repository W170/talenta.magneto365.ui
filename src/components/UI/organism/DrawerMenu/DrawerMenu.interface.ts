import { IMainButton } from '../../atoms'
import { IHeaderDrawerTabs, IListMenuItems } from '../../molecules'

export interface IDrawerOrganism {
  className?: string
  /**
   * Here is drawer header tabs component
   */
  headerDrawerProps: IHeaderDrawerTabs
  /**
   * Here is the menu list component
   */
  listMenuProps: IListMenuItems
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
  onClose?: () => void | undefined
  /**
   *
   */
  isOpen?: boolean | undefined
}
