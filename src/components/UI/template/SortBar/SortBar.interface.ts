import { ISortMenuItem } from '../../molecules/SortMenu/SortMenu.interface'

export interface ISortBar {
  /**
   * This is the text for the bottom filter
   */
  textSortButton: string
  /**
   * This is the content of the h1 tag of the page
   */
  mainTitle: string
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
  orderFields: ISortMenuItem[]
  /**
   * this is the mobile text to alphabetical order
   */
  orderByText: string
  /**
   * If this flag is true the buttonFilter isn't visible
   */
  isFiltersOpen: boolean
  /**
   * With this property you can disabled the button in menu filter molecule
   */
  loading: boolean
  /**
   * This te title attribute for the button to order the jobs
   */
  titleBtnOrder?: string
  /**
   * With this function you open the drawer
   */
  setIsFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * With this function you can change the alphabetical order
   */
  orderFilter: () => void

  /**
   *This function change the filter with the selected option
   */
  setFilter: (menuItem: { key: string }) => void
}
