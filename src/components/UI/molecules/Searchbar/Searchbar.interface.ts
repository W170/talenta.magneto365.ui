import { IMainButton } from '../../atoms'

export interface ISearchbar {
  /**
   * Sets the value for the input in the searchbar
   */
  termValue: any
  /**
   * Placeholder text for the searchbar
   */
  placeholder: string
  /**
   * Handler for the input value
   */
  onSearch: (searchValue: string) => void
  /**
   * Props for the search button
   */
  searchButtonProps?: IMainButton
  /**
   * Props for the remove button
   */
  removeButtonProps?: IMainButton
}
