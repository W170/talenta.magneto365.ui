import { IMenuIcon } from '../MenuIcon/MenuIcon.interface'

export interface IListMenuIcons {
  urlParam: string
  menuItems: IMenuItems[]
  menuItems1440?: IMenuItems[]
  className?: string
  logout: ILogout
  settings: ISettings
}

export interface IMenuItems {
  title?: string
  items: IMenuIcon[]
}

export interface ILogout {
  onClick: () => void
  logoutText: string
}

export interface ISettings {
  onClick: () => void
  settingsText: string
}
