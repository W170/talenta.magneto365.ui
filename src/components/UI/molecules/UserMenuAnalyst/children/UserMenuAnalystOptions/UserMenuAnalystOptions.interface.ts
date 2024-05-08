import { IUserMenuAnalystOptionClassNames } from './children'
import { IUserMenuAnalystQueryString, IUserMenuAnalystSection } from '../../UserMenuAnalyst.interface'

export interface IUserMenuAnalystOptionsProps {
  /**
   * Class name for styling
   */
  className?: string
  /**
   * Is menu open or not
   */
  isMenuOpen?: boolean
  /**
   * Class name for each option
   */
  optionClassNames?: IUserMenuAnalystOptionClassNames
  /**
   * List of options
   */
  options: IUserMenuAnalystSection[]
  /**
   * Query string params
   */
  queryString?: IUserMenuAnalystQueryString
}
