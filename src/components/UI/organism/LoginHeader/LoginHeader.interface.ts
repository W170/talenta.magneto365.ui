import { IAvatar } from '../../atoms'
import { IHeaderTabs, ISearchbar } from '../../molecules'
import { ILogout, IMenuItems, ISettings } from '../../molecules/ListMenuIcons/ListMenuIcons.interface'
import { IMobileSearchbar } from '../../molecules/MobileSearchbar/MobileSearchbar.interface'

export interface ILoginHeader {
  profileImage: IAvatar
  breadcrumbText: string
  className?: string
  listMenuUserProps: IlistMenuUserProps
  onClick?: () => void
  jobsTabsProps: IHeaderTabs
  processTabsProps: IHeaderTabs
  curriculumTabProps: IHeaderTabs
  searchbar: ISearchbar
  MobileSearchbarProps: IMobileSearchbar
}

export interface IlistMenuUserProps {
  urlParam: string
  menuItems: IMenuItems[]
  menuItems1440: IMenuItems[]
  logout: ILogout
  settings: ISettings
}
