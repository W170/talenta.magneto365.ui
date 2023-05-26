import { ILinkProps } from '../../atoms'

export interface ITabButton {
  /**
   * Sets a box shadow property for the Tab Button
   */
  boxShadow?: boolean
  /**
   * Props for the link Atom
   */
  linkProps: ILinkProps
  /**
   * Sets the tab button color
   */
  tabButtonColor?: string
  /**
   * Sets the font size for the text
   */
  tabButtonTextSize: string
  /**
   * Sets the font weigth for the text
   */
  tabButtonTextWeight?: string
  className?: string
}
