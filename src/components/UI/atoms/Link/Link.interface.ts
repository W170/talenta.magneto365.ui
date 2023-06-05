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
   * Sets link type
   */
  type: LinkType
  /**
   *  Sets href for link
   */
  href: string
  /**
   * Sets inside text for link
   */
  text: string
  /**
   * Props for the Icon
   */
  iconProps?: IconProps
  /**
   * Sets if link is mobile
   */
  isMobile?: boolean
  /**
   * Sets the link styles including icon
   */
  linkStyles?: LinkElement
  className?: string
}
