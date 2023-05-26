import { IMenuItems } from '../../molecules/ListMenuIcons/ListMenuIcons.interface'

export interface ILoginHeader {
  className?: string
  listMenuUserProps: { urlParam: string; menuItems: IMenuItems[] }
  onClick?: () => void
}
