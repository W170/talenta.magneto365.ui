import { ILinkProps } from '../../atoms'

export interface TabButtonElement {
  /**
   * Sets the tab button color
   */
  tabButtonColor?: string
  /**
   * Sets the font size for the text
   */
  tabButtonTextSize?: string
  /**
   * Sets the font weigth for the text
   */
  tabButtonTextWeight?: string
  /**
   * Sets a box shadow property for the Tab Button
   */
  boxShadow?: boolean
}
export interface ITabButton {
  /**
   * Props for the link Atom
   */
  linkProps: ILinkProps
  /**
   * Sets the style props for the Tab Button
   */
  tabButtonProps?: TabButtonElement
  className?: string
}
