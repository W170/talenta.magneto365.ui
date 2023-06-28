import { IMenuFilterItem } from '../../molecules/MenuFilter/MenuFilter.interface'

export interface IFilterBottomHeader {
  /**
   * This is the text for the bottom filter
   */
  textButtonFilter: string
  /**
   * this is the text for the value filtered
   */
  filterSummary: string
  /**
   * You can change the text with the filters summary
   */
  textOrderFilter: string
  /**
   * With this function you open the drawer
   */
  openFilterDrawer: () => void
  /**
   * With this function you can change the alphabetical order
   */
  orderFilter: () => void
  /**
   * This is an array with the menu options
   */
  filterItems: IMenuFilterItem[]
  /**
   *This function change the filter with the selected option
   */
  setFilter: (menuItem: { key: string }) => void
  /**
   * this is the mobile text to alphabetical order
   */
  orderByText: string
}
