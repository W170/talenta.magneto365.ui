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
   * Show country
   */
  country: INavMenuAnalystOption
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
  onCountryClick: () => void
  /**
   * Function to handle dropdown click
   */
  onDropdownClick?: (option: INavMenuAnalystOption | null) => void
  /**
   * Custom path to highlight menu option
   */
  path?: string
  /**
   * Menu navigation options
   */
  sections: INavMenuAnalystSection[]
}

export interface INavMenuAnalystSection {
  /**
   * Section title
   */
  title?: string
  /**
   * Section navigation options
   */
  subChildren: INavMenuAnalystOption[]
}

export interface INavMenuAnalystOption {
  /**
   * Option title
   */
  title?: string
  /**
   * Option href
   */
  data?: string | INavMenuAnalystSection[]
  /**
   * Icons props
   */
  icons?: INavMenuAnalysIcons
}

export interface INavMenuAnalysIcons {
  /**
   * Icon normal state
   */
  normal?: string
  /**
   * Icon active state
   */
  active?: string
}
