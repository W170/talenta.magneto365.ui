import { IListIcon } from '../../molecules/ListIconLink'
import { MenuItemInfo } from '../../molecules/ListMenuItems/ListMenuItems.interface'
import { ITabButton } from '../../molecules/TabButton'

export interface IDrawerOrganism {
  className: string
  tabButton: ITabButton[]
  menuList: MenuItemInfo[]
  urlParam: string
  listIcon: IListIcon[]
}
