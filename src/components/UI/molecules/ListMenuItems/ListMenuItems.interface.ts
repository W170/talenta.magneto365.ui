import { IMenuItem } from '../../atoms/MenuItem/MenuItem.interface'

export interface MenuItemInfo extends IMenuItem {
  slug: string
}

export interface IListMenuItems {
  menuList: MenuItemInfo[]
  urlParam: string
}
