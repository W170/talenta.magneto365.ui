import { IconProps } from '../Icon'

export type LinkType = 'button' | 'link'

export interface ILinkProps {
  /**
   * Props for the Icon
   */
  iconProps?: IconProps
  /**
   * Sets text color
   */
  textColor?: string
  /**
   * Sets button color
   */
  buttonColor?: string
  /**
   * Sets hover color
   */
  hoverColor?: string
  /**
   * Sets visited color
   */
  visitedColor?: string
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
  className?: string
}
