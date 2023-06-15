import { IMainButton } from '../../atoms'

export interface ISearchbar {
  /**
   * Placeholder text for the searchbar
   */
  placeholder: string
  /**
   * Handler for the input value
   */
  onSearch: (searchValue: string) => void
  searchButtonProps?: IMainButton
  removeButtonProps?: IMainButton
  className?: string
  termValue: string
}
