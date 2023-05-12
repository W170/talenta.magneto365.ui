import { IMenuIcon } from '../MenuIcon/MenuIcon.interface'

export interface IListMenuIcons {
  urlParam: string
  menuItems: IMenuItems[]
  className?: string
}

export interface IMenuItems {
  title: string
  items: IMenuIcon[]
}
