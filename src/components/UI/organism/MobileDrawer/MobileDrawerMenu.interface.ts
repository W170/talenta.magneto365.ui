import { IListMenuIcons } from '../../molecules/ListMenuIcons/ListMenuIcons.interface'
import { IMoblieDrawer } from '../../molecules/MobileDrawer/MobileDrawer.interface'

export interface IMobileDrawerMenu extends IMoblieDrawer {
  /**
   * menu items props
   */
  listProps: IListMenuIcons
}
