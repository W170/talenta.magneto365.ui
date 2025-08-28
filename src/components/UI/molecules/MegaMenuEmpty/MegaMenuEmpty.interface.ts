export interface IMegaMenuEmpty {
  /**
   * Empty Title
   */
  title: string
  /**
   * Empty Subtitle
   */
  subtitle: string
  /**
   * Image Data
   */
  imageData?: string
  /**
   * Image heigth
   */
  imageHeight?: number
  /**
   * CustomStyles
   */
  customStyle?: {
    content?: React.CSSProperties
    title?: React.CSSProperties
    subtitle?: React.CSSProperties
    image?: React.CSSProperties
  }
}
