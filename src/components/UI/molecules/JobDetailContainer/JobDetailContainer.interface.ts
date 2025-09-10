export interface IJobDetailContainer {
  /**
   * you must add jsx elements
   */
  children: JSX.Element | JSX.Element[] | React.ReactNode
  /**
   * this property opens and closes the menu
   */
  isOpen: boolean
  /**
   * this function closes the menu
   */
  onClose: () => void
}
