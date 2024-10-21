export interface IMessage {
  /**
   * Optional description of the message
   */
  description?: string
  /**
   * This is the optional duration in milliseconds
   * */
  duration?: number
  /**
   * This is the main text in the message
   * */
  text: string
  /**
   * This is the type of message
   *  */
  type?: 'info' | 'success' | 'warning' | 'error'
}
