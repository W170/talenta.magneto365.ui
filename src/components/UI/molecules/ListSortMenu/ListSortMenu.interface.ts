import { ISortMenuItem } from '../'

export interface IListSortMenu {
  /**
   * This is an array with the menu options
   */
  orderFields: ISortMenuItem[]
  /**
   * This function change the filter with the selected option
   */
  setFilter: (menuItem: { key: string }) => void
  /**
   * This is the current text
   */
  textOrderFilter: string
  /**
   * This function can close the popover
   */
  setShowPopover: React.Dispatch<React.SetStateAction<boolean>>
}
