export interface IImage {
  /**
   * This property is the image that appears before the video is mounted
   */
  image: string
  /**
   * This property is the text alt to image
   */
  alt: string
  /**
   * This property is the play icon in the picture
   */
  playIcon?: JSX.Element

  className?: string
}
