import { IAvatar, IMainButton } from '@components/UI/atoms'
import { IMenuIcon } from '@components/UI/molecules'

export interface IUserMenuAnalystProps {
  /**
   * Company data
   */
  company: ICompanyAnalyst
  /**
   * Array of menu options by section
   */
  options?: IUserMenuAnalystSections[]
  /**
   * Share button props
   */
  shareButtonProps: IMainButton
  /**
   * User data
   */
  user: IUserAnalyst
}

export interface IUserMenuAnalystSections {
  /**
   * Array of menu options
   */
  section?: IMenuIcon[]
}

export interface IUserAnalyst {
  /**
   * Avatar of the user
   */
  avatar: IAvatar
  /**
   * Mail of the user
   */
  mail: string
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
  subCompanies?: ISubCompanyAnalyst[]
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
