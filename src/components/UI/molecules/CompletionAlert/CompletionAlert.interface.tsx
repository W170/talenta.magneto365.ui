export interface ICompletionAlert {
  /**
   * this property sets the description text (normal weight)
   */
  text: string

  /**
   * this property sets the bold text (displayed after text)
   */
  boldText?: string

  /**
   * this property sets the link text
   */
  textLink?: string

  /**
   * this property sets link redirect
   */
  link?: string

  /**
   * callback triggered when the alert is closed
   */
  onClose?: () => void

  /**
   * whether show the close button (default: true)
   */
  closable?: boolean
}
