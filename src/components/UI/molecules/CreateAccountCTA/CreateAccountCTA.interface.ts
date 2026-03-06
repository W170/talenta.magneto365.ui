export interface ICreateAccountCTA {
  /**
   * this property sets a fn on click
   */
  onHandlerCreateAccount: () => void
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
  /**
   * optional click handler for the secondary action (newsletter)
   */
  onHandlerNewsletter?: () => void
  /**
   * text for primary button (create account)
   */
  primaryText?: string
  /**
   * text for secondary button (newsletter)
   */
  secondaryText?: string
}
