import { ILinkProps } from '../../atoms'

export interface TabButtonElement {
  /**
   * Sets the font size for the text
   */
  tabButtonTextSize?: string
  /**
   * Sets the font weigth for the text
   */
  tabButtonTextWeight?: string
  /**
   * Sets the tab button color
   */
  tabButtonColor?: string
  /**
   * Sets a box shadow property for the Tab Button
   */
  boxShadow?: boolean
}
export interface ITabButton {
  /**
   * Props to set the Link component
   */
  tabButtonLinkProps?: ILinkProps
  /**
   * Sets the style props for the Tab Button
   */
  tabButtonStyles?: TabButtonElement
  className?: string
}
