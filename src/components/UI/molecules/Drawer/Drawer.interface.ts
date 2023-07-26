export interface IDrawer {
  /**
   * Optional class name for styling the drawer.
   */
  className?: string

  /**
   * Represents whether the drawer is open or closed.
   */
  isOpen: boolean

  /**
   * Callback function to be executed when the drawer is closed.
   */
  onClose: () => void

  /**
   * The content that can be displayed inside the drawer.
   * It can be a single JSX element, an array of JSX elements, or any other type.
   */
  children: JSX.Element | JSX.Element[] | any

  /**
   * Allows changing the direction of the drawer (e.g., "left", "right", "top", "bottom").
   */
  direction?: string

  /**
   * Specifies whether the close button should be hidden.
   */
  hideButton?: boolean

  /**
   * Custom padding value for the drawer content.
   */
  customPadding?: number

  /**
   * Specifies whether the drawer is being displayed on a mobile device.
   * (Optional property)
   */
  isMobile?: boolean
}

/**
 * This interface represents a Portal for the Drawer component.
 */
export interface IDrawerPortal {
  /**
   * The content to be rendered inside the Drawer Portal.
   * It can be a single JSX element, an array of JSX elements, or `false` to indicate no content.
   */
  children: false | JSX.Element | JSX.Element[]
}
