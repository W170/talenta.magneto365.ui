import { IBreadcrumbs, IUserMenuDropdownAnalystProps } from '@components/UI/molecules'
import { ILogoComponent, ILinkProps } from '@components/UI/atoms'

export interface IHeaderAnalystProps {
  /**
   * Breadcrumbs props
   */
  breadCrumbProps: IBreadcrumbs
  /**
   * Class name
   */
  className?: string
  /**
   * Logo props
   */
  logoProps?: ILogoComponent
  /**
   * Main menu button click handler
   */
  onMainMenuClick?: () => void
  /**
   * User menu data and handlers
   */
  userMenuProps: IUserMenuDropdownAnalystProps
  /**
   * User notification link props
   */
  userNotificationProps?: ILinkProps
}
