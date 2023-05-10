import { ITabButton } from '../TabButton'

export interface ITab {
  /**
   * Sets the array that contains the Tab Buttons
   */
  tabButtonList?: ITabButton[]
  /**
   * Props for the Tab Button
   */
  tabButtonProps: ITabButton
  className?: string
}
