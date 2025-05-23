export interface ITabItem {
  /**
   * Tab item text
   */
  text: string
  /**
   * Tab item action
   */
  onClick?: () => void
  /**
   * Tab item styles
   */
  className?: string
  /**
   * Tab item disabled state
   * @default false
   */
  isDisabled?: boolean
  /**
   * Tab item selected state
   * @default false
   */
  isSelected?: boolean
}
