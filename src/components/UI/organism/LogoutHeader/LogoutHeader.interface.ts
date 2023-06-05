import { ILinkProps, IMainButton } from '../../atoms'
import { ISearchbar } from '../../molecules'

export interface ILogoutHeader {
  leftTabButton: ILinkProps
  rightTabButton: ILinkProps
  searchbarConfig: ISearchbar
  signInLink: ILinkProps
  signUpButton: IMainButton
  onClick?: () => void
  className?: string
}
