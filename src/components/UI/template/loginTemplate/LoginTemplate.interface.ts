import { IMenuItems } from '../../molecules/ListMenuIcons/ListMenuIcons.interface'
import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface'
export interface ILoginTemplate {
  className?: string
  listMenuProps: IListMenuItems
  listMenuUserProps: { urlParam: string; menuItems: IMenuItems[] }
}
