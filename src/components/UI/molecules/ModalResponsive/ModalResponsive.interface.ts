export interface IModalResponsive {
  /**
   * this property open the container
   */
  open: boolean
  /**
   * this property close the container
   */
  onClose: () => void
  /**
   * this property sets the children elements
   */
  children: JSX.Element | JSX.Element[]
  /**
   * this property sets customs styles for the modal
   */
  modalClassName?: string
  /**
   * this property sets customs styles for the mobile drawer
   */
  mobileDrawerClassName?: string
}
