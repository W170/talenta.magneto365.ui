import { IAvatar, IBreadcrumb } from '../../atoms'
import { IHeaderTabs, ISearchbar } from '../../molecules'
import { ILogout, IMenuItems, ISettings } from '../../molecules/ListMenuIcons/ListMenuIcons.interface'
import { IMobileSearchbar } from '../../molecules/MobileSearchbar/MobileSearchbar.interface'

export interface ILoginHeader {
  profileImage: IAvatar
  className?: string
  listMenuUserProps: IlistMenuUserProps
  onClick?: () => void
  jobsTabsProps: IHeaderTabs
  processTabsProps: IHeaderTabs
  curriculumTabProps: IHeaderTabs
  searchbar: ISearchbar
  MobileSearchbarProps: IMobileSearchbar
  homeUrl: string
  breadcrumbProps: IBreadcrumb
}

export interface IlistMenuUserProps {
  urlParam: string
  menuItems: IMenuItems[]
  menuItems1440?: IMenuItems[]
  logout: ILogout
  settings: ISettings
  profileImage?: IAvatar
  isAuthenticated?: boolean
}
