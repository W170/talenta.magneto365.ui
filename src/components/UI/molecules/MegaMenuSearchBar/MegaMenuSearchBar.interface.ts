export interface IMegaMenuSearchBar {
  location: ISearchBar
  occupation: ISearchBar
}

export interface ISearchBar {
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
   * Icon in search input
   */
  icon?: string
  /**
   * Action Icon
   */
  actionIcon?: string
  /**
   * options
   */
  options: ISearchOptions[]
  /**
   * sectionTitle
   */
  sectionTitle?: ISectionTitle
  /**
   * class name
   */
  className?: string
  /**
   *
   */
  onSelectOption?: (option: ISearchOptions) => void
}

export interface ISectionTitle {
  title: string
  url: string
  onClick: (event: React.MouseEvent) => void
  icon?: string
}

export interface ISearchOptions {
  title: string
  subtitle?: string
  url: string
  field?: string
}
