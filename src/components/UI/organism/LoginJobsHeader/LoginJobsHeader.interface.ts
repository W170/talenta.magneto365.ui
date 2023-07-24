import { IAvatar } from '../../atoms'
import { ILogout, IMenuItems, IMobileSearchbar, ISearchbar, ISettings } from '../../molecules'

export interface ILoginJobsHeader {
  profileImage: IAvatar
  listMenuUserProps: IlistMenuUserPropsNot1440
  searchbar: ISearchbar
  mobileSearchbar: IMobileSearchbar
  breadcrumbsText: string
  onMenuClick?: () => void
  homeUrl: string
  companyLogo: string
  companySlug: string
  companyUrl: string
  gif: string
}

export interface IlistMenuUserPropsNot1440 {
  urlParam: string
  menuItems: IMenuItems[]
  logout: ILogout
  settings: ISettings
}
