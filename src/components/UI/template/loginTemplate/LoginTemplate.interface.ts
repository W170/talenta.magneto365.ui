import { IAvatar } from '../../atoms'
import { IHeaderTabs, IMobileSearchbar, ISearchbar } from '../../molecules'
import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface'
import { IlistMenuUserProps } from '../../organism/LoginHeader'
export interface ILoginTemplate {
  listMenuProps: IListMenuItems
  listMenuUserProps: IlistMenuUserProps
  breadcrumbText: string
  profileImage: IAvatar
  jobsTabsProps: IHeaderTabs
  processTabsProps: IHeaderTabs
  curriculumTabProps: IHeaderTabs
  searchbar: ISearchbar
  MobileSearchbarProps: IMobileSearchbar
  showMenu?: boolean
  homeUrl: string
}
