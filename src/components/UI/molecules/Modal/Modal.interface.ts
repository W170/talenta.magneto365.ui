export interface IModal {
  /**
   * Represents whether the modal is open or closed.
   */
  isOpen: boolean

  /**
   * Callback function to be executed when the modal is closed.
   */
  onClose: () => void
  /**
   * The content that can be displayed inside the modal.
   * It can be a single JSX element, an array of JSX elements
   */
  children: JSX.Element | JSX.Element[]
  /**
   * This property adds a title in the top of the modal
   */
  title?: string
  /**
   * This property adds a description at the top of the modal after the title
   */
  description?: string
  /**This is the custom className */
  className?: string
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
   * Accessible name for the dialog when no `title` is rendered.
   */
  ariaLabel?: string
  /**
   * Element to focus when the modal opens. Defaults to the first focusable
   * element, then to the dialog container.
   */
  initialFocusRef?: React.RefObject<HTMLElement>
  /**
   * Element to focus when the modal closes. Defaults to whatever was focused
   * before it opened (usually the control that opened it).
   */
  returnFocusRef?: React.RefObject<HTMLElement>
}

export interface IModalPortal {
  /**
   * The content to be rendered inside the Drawer Portal.
   * It can be a single JSX element, an array of JSX elements, or `false` to indicate no content.
   */
  children: false | JSX.Element | JSX.Element[]
}

export type IModalTitle = React.HTMLAttributes<HTMLHeadingElement>

export type IModalDescription = React.HTMLAttributes<HTMLParagraphElement>
