import { IDrawerOrganism, ILogoutHeader } from '../../organism'
export interface ILogoutTemplate {
  /**
   * Sets the props of the logout header component
   */
  logoutHeaderProps: ILogoutHeader
  /**
   * Sets the props of the drawer menu component
   */
  headerDrawerMenuProps: IDrawerOrganism
}
