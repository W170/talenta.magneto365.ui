export interface IMoblieDrawer {
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
}
