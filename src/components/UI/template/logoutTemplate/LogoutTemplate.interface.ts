import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface'
import { ILogoutHeader } from '../../organism/LogoutHeader'

export interface ILogoutTemplate {
  // SignUpProps: IMainButton
  // SignInProps: IMainButton
  // listIcon: IListIcon[]
  // headerProps: IHeaderDrawerTabs
  logoutHeaderProps: ILogoutHeader
  /**
   * Sets the menu items props for the list menu items
   */
  listMenuProps: IListMenuItems
}
