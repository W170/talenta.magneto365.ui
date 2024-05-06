import { IUserMenuAnalystOption } from './children/UserMenuAnalystOptions/children'

export interface IUserMenuAnalystProps {
  /**
   * Array of menu options by section for the header
   */
  headerSections?: IUserMenuAnalystSection[]
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
