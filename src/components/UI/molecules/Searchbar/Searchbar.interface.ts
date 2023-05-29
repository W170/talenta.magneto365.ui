import { IMainButton } from '../../atoms'

export interface ISearchbar {
  /**
   * Placeholder text for the searchbar
   */
  placeholder: string
  /**
   * Props for the search button
   */
  searchProps: IMainButton
  /**
   * Props for the remove/delete button
   */
  removeProps: IMainButton
  /**
   * Handler for the input value
   */
  onSearch: (searchValue: string) => void
  className?: string
}
