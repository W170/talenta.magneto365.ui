import { IUserMenuAnalystOptionClassNames } from './children'
import { IUserMenuAnalystQueryString, IUserMenuAnalystSection } from '../../UserMenuAnalyst.interface'

export interface IUserMenuAnalystOptionsProps {
  /**
   * Class name for styling
   */
  className?: string
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
