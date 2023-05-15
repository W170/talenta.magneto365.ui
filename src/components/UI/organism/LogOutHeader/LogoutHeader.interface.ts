import { IconProps } from '../../atoms/Icon'
import { ILinkProps } from '../../atoms/Link'
import { ILogoComponent } from '../../atoms/Logo'
import { IMainButton } from '../../atoms/MainButton'
import { IBreadcrumbs } from '../../molecules/Breadcrumbs'
import { ISearchbar } from '../../molecules/Searchbar'
import { ITab } from '../../molecules/Tab'

export interface ILogoutHeader {
  /**
   * Props for the Searchbar
   */
  searchbarProps: ISearchbar
  /**
   * Props for the Main Button
   */
  mainButtonProps: IMainButton
  /**
   * Props for the Link stylized as a button
   */
  linkProps: ILinkProps
  /**
   * Props for the breadcrumbs
   */
  breadcrumbsProps: IBreadcrumbs
  /**
   * Props for the Tab
   */
  tabProps: ITab
  /**
   * Props for the logo
   */
  logoProps: ILogoComponent
  /**
   * Props for the icon
   */
  iconProps: IconProps
  className?: string
}
