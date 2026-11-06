export interface IMobileDrawer {
  className?: string
  /**
   * open drawer
   */
  isOpen: boolean
  /**
   * close drawer
   */
  onClose: () => void
  /**
   * can receive components inside the drawer
   */
  children: JSX.Element | JSX.Element[] | React.ReactNode
  /**
   * this property blocks fn onClose from background
   */
  blockBackgroundClose?: boolean
  /**
   * this property sets custom className in the background span
   */
  backgroundClassName?: string
  /**
   * Disables the built-in focus management (focus trap, initial focus, focus
   * restoration and hiding the rest of the page). Only opt out when a parent
   * already owns focus for this subtree.
   */
  disableFocusTrap?: boolean
  /**
   * Accessible name for the dialog.
   */
  ariaLabel?: string
  /**
   * Element to focus when the drawer opens. Defaults to the first focusable
   * element, then to the dialog container.
   */
  initialFocusRef?: React.RefObject<HTMLElement>
  /**
   * Element to focus when the drawer closes. Defaults to whatever was focused
   * before it opened (usually the control that opened it).
   */
  returnFocusRef?: React.RefObject<HTMLElement>
}
