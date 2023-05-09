import { IMenuIcon } from '../MenuIcon/MenuIcon.interface'

export interface IListMenuIcons {
  urlParam: string
  menuItems: IMenuItems[]
  className: string
}

interface IMenuItems {
  title: string
  items: IMenuIcon[]
}
