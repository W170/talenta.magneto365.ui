import { IUserMenuAnalystOption, IUserMenuAnalystOptionBase } from '../../UserMenuAnalystOption.interface'

export interface IUserMenuAnalystOptionActionsProps {
  /**
   *
   */
  actions: (IUserMenuAnalystOptionBase & { data?: string | ((option: IUserMenuAnalystOption) => void) })[]
  /**
   *
   */
  getUrl: (option: IUserMenuAnalystOption) => string | undefined
}
