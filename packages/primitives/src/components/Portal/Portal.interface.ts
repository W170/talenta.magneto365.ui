/**
 * Base portal component, can be used by any task related to portal uses.
 */
export interface IPortal {
  /**
   * The content to be rendered inside the Portal.
   * It can be a single JSX element, an array of JSX elements, or `false` to indicate no content.
   */
  children: false | JSX.Element | JSX.Element[]
  /**
   * The key for portal. works same as lists.
   */
  key?: null | string
  /**
   * The dom element to render the portal.
   */
  container?: React.RefObject<HTMLElement> | HTMLElement
}
