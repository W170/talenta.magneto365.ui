import { IMegaMenuSearchBar } from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.interface'
import { IAvatar, IBreadcrumb } from '../../atoms'
import { IHeaderTabs, IListMenuIcons, IMobileSearchbar, ISearchbar } from '../../molecules'
import { IBrandMenu } from '../BrandMenu/BrandMenu.interface'

export interface ILoginJobsHeader {
  profileImage: IAvatar
  listMenuUserProps: IListMenuIcons
  searchbar: ISearchbar | IMegaMenuSearchBar
  mobileSearchbar: IMobileSearchbar
  jobsTabsProps: IHeaderTabs
  processTabsProps: IHeaderTabs
  curriculumTabProps: IHeaderTabs
  onMenuClick?: () => void
  breadcrumbProps: IBreadcrumb
  homeUrl: string
  gif?: string | null
  brandMenuProps: IBrandMenu
}
