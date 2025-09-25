export interface ICreateCustomAlert {
  /**
   * this property sets a fn on click
   */
  onClick: () => void
  /**
   * this property sets the first text
   */
  title: string
  /**
   * this property sets the loader
   */
  isLoading?: boolean
}
