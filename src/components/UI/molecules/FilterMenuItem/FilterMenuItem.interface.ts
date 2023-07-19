export interface IFilterMenuItem {
  /**
   * This is the name that display in the menu
   */
  label: string
  /**
   * This is the quantity of vacancies in this item
   */
  amount: number
  /**
   * Indicate if this item is selected
   */
  isSelected: boolean
  /**
   * This function change if the item is isSelected
   */
  setIsSelected: (state: boolean) => void
}
