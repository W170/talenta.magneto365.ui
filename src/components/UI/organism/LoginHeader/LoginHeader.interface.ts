import { IAvatar } from '../../atoms'
import { IBreadcrumbs, IHeaderTabs } from '../../molecules'
import { ILogout, IMenuItems, ISettings } from '../../molecules/ListMenuIcons/ListMenuIcons.interface'

export interface ILoginHeader {
  profileImage: IAvatar
  breadcrumbsProps: IBreadcrumbs
  className?: string
  listMenuUserProps: IlistMenuUserProps
  onClick?: () => void
  jobsTabsProps: IHeaderTabs
  processTabsProps: IHeaderTabs
  curriculumTabProps: IHeaderTabs
}

export interface IlistMenuUserProps {
  urlParam: string
  menuItems: IMenuItems[]
  menuItems1440: IMenuItems[]
  logout: ILogout
  settings: ISettings
}
