import { ILinkProps, IMainButton } from '../../atoms'
import { IBreadcrumbs, ISearchbar } from '../../molecules'
import { ITab } from '../../molecules'

export interface ILogoutHeader {
  tabProps: ITab
  searchbarProps: ISearchbar
  signInLinkProps: ILinkProps
  signUpButtonProps: IMainButton
  breadcrumbsProps: IBreadcrumbs
  onClick?: () => void
  className?: string
}
