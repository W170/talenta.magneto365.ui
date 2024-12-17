export interface IFraudCardJob {
  /**
   * This is the text that display in the title of the card
   */
  title: string
  /**
   *This is the text that display in the body of the card
   */
  content: string
  /**
   * This is the text that display in the report button of the card
   */
  linkText: string

  /**
   * This is the link to redirect to the fraud form
   */
  link: string
}
