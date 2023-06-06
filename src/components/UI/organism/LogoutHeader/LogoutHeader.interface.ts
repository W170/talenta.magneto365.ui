import { ILinkProps, IMainButton } from '../../atoms'
import { ISearchbar } from '../../molecules'

export interface ILogoutHeader {
  leftTabButton: ILinkProps
  rightTabButton: ILinkProps
  searchbar: ISearchbar
  signInLink: ILinkProps
  signUpButton: IMainButton
  breadcrumbsText: string
  onClick?: () => void
  className?: string
}
