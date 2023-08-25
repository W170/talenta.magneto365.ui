import { ISortMenuItem } from '../../molecules/SortMenu/SortMenu.interface'

export interface IMobileSortMenu {
  /**
   * this property open drawer
   */
  isOpen: boolean
  /**
   * this property close drawer
   */
  onClose: () => void
  /**
   * This is an array with the menu options
   */
  orderFields: ISortMenuItem[]
  /**
   * This function change the filter with the selected option
   */
  setFilter: (menuItem: { key: string }) => void
  /**
   * With this function you can change the alphabetical order
   */
  orderFilter: () => void
  /**
   * this is the mobile text to alphabetical order
   */
  orderByText: string
  /**
   * This is the current text
   */
  textOrderFilter: string
  /**
   * This function can close the popover
   */
  setShowPopover: React.Dispatch<React.SetStateAction<boolean>>
}
