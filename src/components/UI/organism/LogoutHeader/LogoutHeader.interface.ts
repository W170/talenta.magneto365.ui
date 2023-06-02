import { ILinkProps } from '../../atoms'
import { ISearchbar, ITab } from '../../molecules'

export interface ILogoutHeader {
  tabButtons: ITab
  searchbarConfig: ISearchbar
  signInLink: ILinkProps
  onClick?: () => void
  className?: string
}
