export interface TOptionFilterSearch {
  /**
   * This is the text that shows
   */
  label: string
  /**
   * This is the quantity of vacancies for this option
   */
  amount: number
  /**
   * Temporal content
   */
  id: number
  operator: number
}

export interface IFilterSearchItem {
  /**
   * This is a vector whit the search options
   */
  options: TOptionFilterSearch[]
  /**
   * This function modify the options
   */
  setOptions: (filteredOptions: TOptionFilterSearch[]) => void
  /**
   * This is the text that display in the placeholder
   */
  placeholder: string
}
