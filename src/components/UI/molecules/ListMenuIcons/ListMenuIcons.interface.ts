import { IAvatar } from '@components/UI/atoms'
import { IMenuIcon } from '../MenuIcon/MenuIcon.interface'

export interface IListMenuIcons {
  urlParam: string
  menuItems: IMenuItems[]
  menuItems1440?: IMenuItems[]
  logout: ILogout
  settings: ISettings
  haveGif?: boolean
  profileImage: IAvatar
  isAuthenticated: boolean
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
