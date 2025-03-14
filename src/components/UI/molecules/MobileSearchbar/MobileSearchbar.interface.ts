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
}
