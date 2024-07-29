import { IUserMenuAnalystOptionClassNames } from './children'
import { IUserMenuAnalystQueryString, IUserMenuAnalystSection } from '../../UserMenuAnalyst.interface'

export interface IUserMenuAnalystOptionsProps {
  /**
   * Class name for styling
   */
  className?: string
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
