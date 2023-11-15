export interface ITag {
  /**
   * this property add icon in the left side
   */
  icon?: string
  /**
   * this property click functionality
   */
  onClick?: () => void
  /**
   * this prperty show label text
   */
  text: string
  /**
   * this property set the background color
   */
  bgColor?: string
  /**
   * this property set the text color
   */
  textColor?: string
}
