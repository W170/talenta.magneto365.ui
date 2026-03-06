import { IListMenuText } from '../../ListMenuText/ListMenuText.interface'

export interface IMenuCollapseChildren extends IListMenuText {
  isOpen: boolean
  onClick: () => void
  heightContent?: number
}
