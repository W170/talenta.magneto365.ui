export interface IMenuSearch {
  /** */
  content: JSX.Element | JSX.Element[]
  /**
   * Here must be the element that invokes the popover
   */
  children: JSX.Element | JSX.Element[]

  /**
   * This property show and hide the content
   */
  show: boolean
  /**
   * This function is called when the onBlur event is triggered in the input tag
   */
  handleOnBlur?: () => void
  /** */
  /** */
}
