import { IAvatar } from '../../atoms'
import { IBreadcrumbs } from '../../molecules'
import { ILogout, IMenuItems, ISettings } from '../../molecules/ListMenuIcons/ListMenuIcons.interface'

export interface ILoginHeader {
  profileImage: IAvatar
  breadcrumbsProps: IBreadcrumbs
  className?: string
  listMenuUserProps: IlistMenuUserProps
  onClick?: () => void
}

export interface IlistMenuUserProps {
  urlParam: string
  menuItems: IMenuItems[]
  menuItems1440: IMenuItems[]
  logout: ILogout
  settings: ISettings
}
