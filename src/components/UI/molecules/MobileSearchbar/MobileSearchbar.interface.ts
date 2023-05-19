import { IMainButton } from '../../atoms/MainButton'

export interface IMobileSearchbar {
  /**
   * Sets the toggle state for the mobile searchbar
   */
  showMobileSearchbar: boolean
  /**
   * Sets the input ref for the searchbar input
   */
  focusSearchInput: boolean
  /**
   * Props for the search button
   */
  searchProps: IMainButton
  /**
   * Props for the remove/delete button
   */
  closeProps: IMainButton
  /**
   * Handler for the input value
   */
  onSearch: (searchValue: string) => void
  /**
   * Handler for the show mobile searchbar
   */
  onClick: () => void
  className?: string
}
