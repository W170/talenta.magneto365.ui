import { IAvatar } from '../../atoms'
import { ILogout, IMenuItems, IMobileSearchbar, ISearchbar, ISettings } from '../../molecules'
import { IBrandMenu } from '../BrandMenu/BrandMenu.interface'

export interface ILoginJobsHeader {
  profileImage: IAvatar
  listMenuUserProps: IlistMenuUserPropsNot1440
  searchbar: ISearchbar
  mobileSearchbar: IMobileSearchbar
  breadcrumbsText: string
  onMenuClick?: () => void
  homeUrl: string
  gif?: string | null
  brandMenuProps: IBrandMenu
}

export interface IlistMenuUserPropsNot1440 {
  urlParam: string
  menuItems: IMenuItems[]
  logout: ILogout
  settings: ISettings
}
