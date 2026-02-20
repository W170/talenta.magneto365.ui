import { IMegaMenuSearchBar, ISearchBar } from '@components/UI/molecules/MegaMenuSearchBar'
import { IAvatar, IBreadcrumb } from '../../atoms'
import { IHeaderTabs, IMobileSearchbar } from '../../molecules'
import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface'
import { IlistMenuUserProps } from '../../organism/LoginHeader'
export interface ILoginTemplate {
  listMenuProps: IListMenuItems
  listMenuUserProps: IlistMenuUserProps
  profileImage: IAvatar
  jobsTabsProps: IHeaderTabs
  processTabsProps: IHeaderTabs
  curriculumTabProps: IHeaderTabs
  searchbar: ISearchBar | IMegaMenuSearchBar
  MobileSearchbarProps: IMobileSearchbar
  showMenu?: boolean
  homeUrl: string
  breadcrumbProps: IBreadcrumb
  onlyMenuUser?: boolean
}
