export interface IMobileSearchbar {
  /**
   * Sets the toggle state for the mobile searchbar
   */
  showMobileSearchbar?: boolean
  /**
   * Sets the input ref for the searchbar input
   */
  focusSearchInput?: boolean
  /**
   * Handler for the input value
   */
  onSearch: (searchValue: string) => void
  /**
   * Handler for the show mobile searchbar
   */
  termValue?: string
  onClick?: () => void
  className?: string
}
