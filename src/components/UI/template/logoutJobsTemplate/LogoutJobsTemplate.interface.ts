import { IListMenuItems } from '../../molecules'
import { ILogoutJobsHeader } from '../../organism'
import { IListIcon } from '../../molecules/ListIconLink/ListIconLink.interface'

export interface ILogoutJobsTemplate {
  /**
   * Sets the props of the logout header component
   */
  logoutJobsHeaderProps: ILogoutJobsHeader
  /**
   * Sets the props of the drawer menu component
   */
  homeUrl: string
  listMenuProps: IListMenuItems
  ListIcon?: IListIcon[]
}
