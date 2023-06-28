import { IMenuFilterItem } from '../../molecules/MenuFilter/MenuFilter.interface'

export interface IMobileMenuFilter {
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
  filterItems: IMenuFilterItem[]
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
}
