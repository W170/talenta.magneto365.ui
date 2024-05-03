import { IUserMenuAnalystQueryString, IUserMenuAnalystSection } from '../../../../UserMenuAnalyst.interface'

export interface IUserMenuAnalystOptionProps {
  /**
   * Class name for styling
   */
  classNames?: IUserMenuAnalystOptionClassNames
  /**
   * Option to show
   */
  option: IUserMenuAnalystOption
  /**
   * Query string params
   */
  queryString?: IUserMenuAnalystQueryString
}

export interface IUserMenuAnalystOption {
  /**
   * Data for the option, can be a string or an array of INavMenuAnalystSection
   */
  data?: string | IUserMenuAnalystSection[] | ((option: IUserMenuAnalystOption) => void)
  /**
   * Icon index type
   */
  icon?: string
  /**
   * Is link highlighted or not
   */
  isLinkHighlighted?: boolean
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

export interface IUserMenuAnalystOptionClassNames {
  link: string
  dropdown: string
}
