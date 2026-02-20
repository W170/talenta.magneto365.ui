import { ISearchOptions } from '../MegaMenuSearchBar/MegaMenuSearchBar.interface'

export interface IMobileSearchbar {
  /**
   * Handler for the input value
   */
  onSearch: (searchValue: string) => void
  /**
   * Sets the input ref for the searchbar input
   */
  focusSearchInput?: boolean
  /**
   * Sets the toggle state for the mobile searchbar
   */
  showMobileSearchbar?: boolean
  /**
   * Handler for the show mobile searchbar
   */
  onClick?: () => void
  /**
   * Sets the value for the input in the searchbar
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  termValue?: any
  /**
   * placeholder
   */
  placeholder?: string
  /**
   * List of suggested options rendered as links
   */
  options?: ISearchOptions[]
  /**
   * Callback triggered when an option is selected
   */
  onSelectOption?: (option: ISearchOptions) => void
  /**
   * Callback executed when user submits search
   */
  onSubmit?: (termValue: string) => void
}
