import { ILinkProps } from '../../atoms/Link'
import { ILogoComponent } from '../../atoms/Logo'
import { IMainButton } from '../../atoms/MainButton'
import { IBreadcrumbs } from '../../molecules/Breadcrumbs'
import { IMobileSearchbar } from '../../molecules/MobileSearchbar'
import { ISearchbar } from '../../molecules/Searchbar'
import { ITab } from '../../molecules/Tab'

export interface ILogoutHeader {
  /**
   *
   */
  menuProps: IMainButton
  /**
   * Props for the search button
   */
  openProps: IMainButton
  /**
   * Props for the Searchbar
   */
  searchbarProps: ISearchbar
  /**
   * Props for the Mobile Searchbar
   */
  mobileProps: IMobileSearchbar
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
  onClick?: () => void
  className?: string
}
