import { IUserMenuAnalystOption, IUserMenuAnalystOptionBase } from '../../UserMenuAnalystOption.interface'

export interface IUserMenuAnalystOptionActionsProps {
  /**
   * Array of actions
   */
  actions: (IUserMenuAnalystOptionBase & { data?: string | ((option: IUserMenuAnalystOption) => void) })[]
  /**
   * Function to handle modal visibility from analyst template
   */
  handleModal?: (name: string, visible: boolean, data: unknown) => void
  /**
   * Function to handle menu visibility
   */
  handleMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Function to get URL of action with query string parameters
   */
  getUrl: (option: IUserMenuAnalystOption) => string | undefined
  /**
   * Selected option
   */
  option: IUserMenuAnalystOption
}

export interface IUserMenuAnalystOptionActionProps {
  /**
   * Selected action
   */
  action: IUserMenuAnalystOptionBase & { data?: string | ((option: IUserMenuAnalystOption) => void) }
  /**
   * Function to handle modal visibility from analyst template
   */
  handleModal?: (name: string, visible: boolean, data: unknown) => void
  /**
   * Function to handle menu visibility
   */
  handleMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Function to get URL of action with query string parameters
   */
  getUrl: (option: IUserMenuAnalystOption) => string | undefined
  /**
   * Selected option
   */
  option: IUserMenuAnalystOption
}
