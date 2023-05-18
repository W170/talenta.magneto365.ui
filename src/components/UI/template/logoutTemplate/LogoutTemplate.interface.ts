import { IMainButton } from '../../atoms/MainButton'
import { IListIcon } from '../../molecules/ListIconLink'
import { IHeaderDrawerTabs } from '../../molecules/HeaderDrawerTabs/HeaderDrawerTabs.interface'
import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface'

export interface ILogoutTemplate {
  className?: string
  /**
   * Button props to create account
   */
  createAccount: IMainButton
  /**
   * Button props to login
   */
  login: IMainButton
  /**
   * List icon props
   */
  listIcon: IListIcon[]
  /**
   * Headers props
   */
  headerProps: IHeaderDrawerTabs
  /**
   * Menu props
   */
  listMenuProps: IListMenuItems
}
