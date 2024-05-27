import { IUserMenuAnalystOption, IUserMenuAnalystOptionBase } from '../../UserMenuAnalystOption.interface'

export interface IUserMenuAnalystOptionActionsProps {
  /**
   * Array of actions
   */
  actions: (IUserMenuAnalystOptionBase & { data?: string | ((option: IUserMenuAnalystOption) => void) })[]
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
   * Function to get URL of action with query string parameters
   */
  getUrl: (option: IUserMenuAnalystOption) => string | undefined
  /**
   * Selected option
   */
  option: IUserMenuAnalystOption
}
