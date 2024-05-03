import { ILogoComponent } from '@components/UI/atoms'

export interface INavMenuAnalystProps {
  /**
   * Active dropdown option
   */
  activeDropdown?: INavMenuAnalystOption | null
  /**
   * Class name for container
   */
  className?: string
  /**
   * Default region
   */
  defaultRegion: string
  /**
   * Menu footer
   */
  footer: INavMenuAnalystSection[]
  /**
   * Is drawer menu open
   */
  isDrawerOpen?: boolean
  /**
   * Show full menu
   */
  isFullWidth?: boolean
  /**
   * Is menu opened from header
   */
  isOpenedFromHeader?: boolean
  /**
   * Enables scroll animation when focusing a dropdown
   */
  isScrollAnimated?: boolean
  /**
   * Logo props
   */
  logoProps?: ILogoComponent
  /**
   * Function to handle country click
   */
  onRegionChange?: (region: INavMenuAnalystRegion) => void
  /**
   * Function to handle dropdown click
   */
  onDropdownClick?: (option: INavMenuAnalystOption | null) => void
  /**
   * Custom path to highlight menu option
   */
  path?: string
  /**
   * Menu region data options
   */
  regions: INavMenuAnalystRegion[]
  /**
   * Region modal display texts
   */
  regionModal: INavMMenuAnalystRegionModal
  /**
   * Menu navigation options
   */
  sections: INavMenuAnalystSection[]
  /**
   * Query string params
   */
  queryString?: INavMenuAnalystQueryString
}

export interface INavMenuAnalystSection {
  /**
   * Section title
   */
  title?: string
  /**
   * Section navigation options
   */
  children: INavMenuAnalystOption[]
}

export interface INavMenuAnalystOption {
  /**
   * Data for the option, can be a string or an array of INavMenuAnalystSection
   */
  data?: string | INavMenuAnalystSection[] | ((option: INavMenuAnalystOption) => void)
  /**
   * Icons props
   */
  icons?: INavMenuAnalystIcons
  /**
   * Icon index type
   */
  icon?: string
  /**
   * Enables query string params
   */
  useQueryString?: boolean
  /**
   * Relationship when opening the link
   */
  rel?: string
  /**
   * Target when opening the link
   */
  target?: string
  /**
   * Option title
   */
  title?: string
}

export interface INavMenuAnalystIcons {
  /**
   * Icon normal state
   */
  normal?: string
  /**
   * Icon active state
   */
  active?: string
}

export interface INavMenuAnalystQueryString {
  [key: string]: string
}

export interface INavMenuAnalystRegion {
  lang: string
  flag: string
  name: string
}

export interface INavMMenuAnalystRegionModal {
  title: string
  cancel: string
  apply: string
}
