import { IAvatar, IBreadcrumb } from '../../atoms'
import { IHeaderTabs, IMobileSearchbar, ISearchbar } from '../../molecules'
import { IBrandMenu } from '../BrandMenu/BrandMenu.interface'
import { IlistMenuUserProps } from '../LoginHeader'

export interface ILoginJobsHeader {
  profileImage: IAvatar
  listMenuUserProps: IlistMenuUserProps
  searchbar: ISearchbar
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
