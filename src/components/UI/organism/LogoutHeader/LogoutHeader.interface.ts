import { IBreadcrumb, ILinkProps, IMainButton } from '../../atoms'
import { IMobileSearchbar, ISearchbar } from '../../molecules'

export interface ILogoutHeader {
  leftTabButton: ILinkProps
  rightTabButton: ILinkProps
  searchbar: ISearchbar
  mobileSearchbar: IMobileSearchbar
  signInLink: ILinkProps
  signUpButton: IMainButton
  onMenuClick?: () => void
  breadcrumbProps: IBreadcrumb
  homeUrl: string
  allJobsText: string
  allJobsLink: string
}
