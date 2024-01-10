import { IMainButton } from '../../atoms'

export interface IToogleSearch {
  /**
   * Sets the value for the input in the searchbar
   */
  termValue: string
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
  /**
   * Props for the not open button
   */
  notOpenPropsButton?: IMainButton
}
