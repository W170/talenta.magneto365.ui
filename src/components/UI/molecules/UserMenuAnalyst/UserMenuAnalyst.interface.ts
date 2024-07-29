import { IUserMenuAnalystOption } from './children/UserMenuAnalystOptions/children'

export interface IUserMenuAnalystProps {
  /**
   * Action on click
   */
  action?: IUserMenuAnalystAction
  /**
   * Array of menu options by section for the header
   */
  headerSections?: IUserMenuAnalystSection[]
  /**
   * Function to handle modal visibility from analyst template
   */
  handleModal?: (name: string, visible: boolean, data: unknown) => void
  /**
   * Function to handle menu visibility
   */
  handleMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Is menu open or not
   */
  isMenuOpen?: boolean
  /**
   * Array of menu options by section for the footer
   */
  footerSections?: IUserMenuAnalystSection[]
  /**
   * User data
   */
  user: IUserAnalyst
  /**
   * Query string params
   */
  queryString?: IUserMenuAnalystQueryString
}

export interface IUserMenuAnalystSection {
  /**
   * Section title
   */
  title?: string
  /**
   * Section navigation options
   */
  children: IUserMenuAnalystOption[]
}

export interface IUserMenuAnalystQueryString {
  [key: string]: string
}

export interface IUserAnalyst {
  /**
   * Avatar of the user
   */
  avatar?: string
  /**
   * Mail of the user
   */
  email: string
  /**
   * Name of the user
   */
  name: string
  /**
   * Title of the user
   */
  title: string
}

export interface ICompanyAnalyst {
  /**
   * Name of the company
   */
  name: string
  /**
   * List of subcompanies
   */
  children?: ISubCompanyAnalyst[]
}

export interface ISubCompanyAnalyst {
  /**
   * Link of the subcompany
   */
  href: string
  /**
   * Name of the subcompany
   */
  name: string
}

export interface IUserMenuAnalystAction {
  /**
   * Action link
   */
  data: string | (() => void)
  /**
   * Action icon
   */
  icon?: string
  /**
   * Relationship when opening the link
   */
  rel?: string
  /**
   * Target when opening the link
   */
  target?: string
  /**
   * Action title
   */
  title: string
  /**
   * Enables query string params
   */
  useQueryString?: boolean
}
