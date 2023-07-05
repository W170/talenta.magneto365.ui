import { IMenuFilterItem } from '../MenuFilter/MenuFilter.interface'

export interface IListMenuFilter {
  /**
   * This is an array with the menu options
   */
  filterItems: IMenuFilterItem[]
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
