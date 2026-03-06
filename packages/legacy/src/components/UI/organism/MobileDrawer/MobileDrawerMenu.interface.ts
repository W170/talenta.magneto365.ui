import { IListMenuIcons, IMobileDrawer } from '../../molecules'

export interface IMobileDrawerMenu extends IMobileDrawer {
  /**
   * menu items props
   */
  listMenuUserProps: IListMenuIcons
}
