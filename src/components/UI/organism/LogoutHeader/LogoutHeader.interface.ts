import { ILinkProps, IMainButton } from '../../atoms'
import { IMobileSearchbar, ISearchbar } from '../../molecules'

export interface ILogoutHeader {
  leftTabButton: ILinkProps
  rightTabButton: ILinkProps
  searchbar: ISearchbar
  mobileSearchbar: IMobileSearchbar
  signInLink: ILinkProps
  signUpButton: IMainButton
  breadcrumbsText: string
  onMenuClick?: () => void
  homeUrl: string
}
