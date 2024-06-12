import { IconProps } from '../Icon'

export type LinkType = 'button' | 'link'

export interface LinkElement {
  /**
   * Sets button color
   */
  buttonColor?: string
  /**
   * Sets text color
   */
  textColor?: string
  /**
   * Sets hover color
   */
  hoverColor?: string
  /**
   * Sets visited color
   */
  visitedColor?: string
}

export interface ILinkProps {
  /**
   * Sets the link type for style purpose
   */
  type?: LinkType
  /**
   *  Sets href for link
   */
  href?: string
  /**
   * Sets text for link
   */
  text?: string
  /**
   * Sets the link styles
   */
  linkStyles?: LinkElement
  /**
   * Props for the Icon
   */
  iconProps?: IconProps
  /**
   * Sets if link is mobile
   */
  isMobile?: boolean
  /**
   * Relationship when opening the link
   */
  rel?: string
  /**
   * Target when opening the link
   */
  target?: string

  title?: string
}
