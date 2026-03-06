export interface ICreateAccountCTA {
  /**
   * this property sets a fn on click
   */
  ctaClick: () => void
  /**
   * this property sets the first text
   */
  title: string
  /**
   * this property sets the second text
   */
  description: string
  /**
   * this property sets the loader
   */
  isLoading?: boolean
}
