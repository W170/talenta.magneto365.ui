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
   * This is an array with the menu options
   */
  filterItems: IMenuFilterItem[]
  /**
   * this is the mobile text to alphabetical order
   */
  orderByText: string
  /**
   * If this flag is true the buttonFilter isn't visible
   */
  isOpen: boolean
  /**
   * With this property you can disabled the button in menu filter molecule
   */
  loading: boolean
  /**
   * With this function you open the drawer
   */
  setFilterIsOpen: () => void
  /**
   * With this function you can change the alphabetical order
   */
  orderFilter: () => void

  /**
   *This function change the filter with the selected option
   */
  setFilter: (menuItem: { key: string }) => void
}
