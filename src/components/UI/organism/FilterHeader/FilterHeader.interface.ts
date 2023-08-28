export interface IFilterHeader {
  /**
   * This is the title of the all side filters
   */
  title: string
  /**
   * This is the text that shows the clean button
   */
  buttonText: string
  /**
   * this is the text for the value filtered
   */
  filterSummary: string
  /**
   * This is the total filters applied
   */
  totalApplied: number
  /**
   * This is the function to clean all the filters
   */
  clearFilters: () => Promise<void>
  /**
   * This is the switch title and indicate if has switch
   */
  switchText?: string
}
