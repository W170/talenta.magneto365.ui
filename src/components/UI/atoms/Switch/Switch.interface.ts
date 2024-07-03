export interface ISwitch {
  /**
   * This is the title switch
   */
  title?: string
  /**
   * This is the value of the switch
   */
  isActive: boolean

  /**
   * This function change if the item is isActive
   */
  setIsActive: (state: boolean) => void
  /**
   * This is the optional className for custom styles
   */
  className?: string
}
