import { IBreadcrumb, ILinkProps, IMainButton } from '../../atoms'
import { IMobileSearchbar, ISearchbar } from '../../molecules'
import { IBrandMenu } from '../BrandMenu/BrandMenu.interface'

export interface ILogoutJobsHeader {
  searchbar: ISearchbar
  mobileSearchbar: IMobileSearchbar
  signInLink: ILinkProps
  signUpButton: IMainButton
  onMenuClick?: () => void
  breadcrumbProps: IBreadcrumb
  homeUrl: string
  gif?: string | null
  brandMenuProps: IBrandMenu
}
