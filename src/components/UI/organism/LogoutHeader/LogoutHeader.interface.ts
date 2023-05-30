import { ILinkProps, IMainButton } from '../../atoms'
import { IBreadcrumbs, ISearchbar } from '../../molecules'

export interface ILogoutHeader {
  tabButtonJobs: ILinkProps
  tabButtonRecruiter: ILinkProps
  searchbarProps: ISearchbar
  signInLinkProps: ILinkProps
  signUpButtonProps: IMainButton
  breadcrumbsProps: IBreadcrumbs
  onClick?: () => void
  className?: string
}
