import { IListMenuItems } from '../ListMenuItems'

export interface ICollapse extends IListMenuItems {
  isOpen: boolean
  onClick: () => void
  heightContent?: number
}
