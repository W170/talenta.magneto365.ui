import { ILinkProps, IMainButton } from '../../atoms'
import { IMobileSearchbar, ISearchbar } from '../../molecules'
import { IBrandMenu } from '../BrandMenu/BrandMenu.interface'

export interface ILogoutJobsHeader {
  searchbar: ISearchbar
  mobileSearchbar: IMobileSearchbar
  signInLink: ILinkProps
  signUpButton: IMainButton
  breadcrumbsText: string
  onMenuClick?: () => void
  homeUrl: string
  gif?: string | null
  brandMenuProps: IBrandMenu
}
