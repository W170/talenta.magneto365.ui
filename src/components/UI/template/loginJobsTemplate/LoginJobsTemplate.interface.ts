import { IListMenuItems } from '../../molecules'
import { IDrawerOrganism, ILoginJobsHeader } from '../../organism'
import { IListIcon } from '../../molecules/ListIconLink/ListIconLink.interface'

export interface ILoginJobsTemplate {
  /**
   * Sets the props of the logout header component
   */
  LoginJobsHeaderProps: ILoginJobsHeader
  /**
   * Sets the props of the drawer menu component
   */
  headerDrawerMenuProps: IDrawerOrganism
  homeUrl: string
  listMenuProps: IListMenuItems
  ListIcon: IListIcon[]
}
