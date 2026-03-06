import { INavMenuAnalystOption, INavMenuAnalystQueryString } from '../../NavMenuAnalyst.interface'

export interface INavMenuAnalystOptionProps {
  /**
   * Is drawer menu open
   */
  isDrawerOpen?: boolean
  /**
   * Show full menu
   */
  isFullWidth?: boolean
  /**
   * Is opened from header
   */
  isOpenedFromHeader?: boolean
  /**
   * Is parent option open
   */
  isParentOpen?: boolean
  /**
   * Enables scroll animation when focusing a dropdown
   */
  isScrollAnimated?: boolean
  /**
   * handles dropdown click
   */
  onDropdownClick?: (option: INavMenuAnalystOption | null) => void
  /**
   * handles option click
   */
  onOptionClick?: (option: INavMenuAnalystOption | null) => void
  /**
   * Is open dropdown menu
   */
  openedDropdown?: boolean
  /**
   * Option to show
   */
  option: INavMenuAnalystOption
  /**
   * Custom path to highlight menu option
   */
  path?: string
  /**
   * Query string params
   */
  queryString?: INavMenuAnalystQueryString
}
