import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface'
import { ILogoutHeader } from '../../organism/LogoutHeader'

export interface ILogoutTemplate {
  className?: string
  logoutHeaderProps: ILogoutHeader
  /**
   * Menu props
   */
  listMenuProps: IListMenuItems
}
