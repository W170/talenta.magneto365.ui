export interface IFilterHeader {
  /**
   * This is the title of the filters
   */
  title: string
  /**
   * This is the text that shows the clean button
   */
  buttonText: string
  /**
   * Tis si the text that shows next to de switch
   */
  switchText: string

  /**
   * This is the function to clean all the filters
   */
  cleanFilters: () => void
  /**
   * This is the total filters applied
   */
  filtersApplied: number
}
