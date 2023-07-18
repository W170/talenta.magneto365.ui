import { ILinkProps, IMainButton } from '../../atoms'
import { IMobileSearchbar, ISearchbar } from '../../molecules'

export interface ILogoutJobsHeader {
  searchbar: ISearchbar
  mobileSearchbar: IMobileSearchbar
  signInLink: ILinkProps
  signUpButton: IMainButton
  breadcrumbsText: string
  onMenuClick?: () => void
  homeUrl: string
  companyLogo: string
  companySlug: string
  companyUrl: string
  gif: string
}
