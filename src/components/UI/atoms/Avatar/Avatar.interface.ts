export interface IAvatar {
  /**
   * Sets the user image
   */
  userImage?: string | null
  /**
   * Sets the fallback image when the image is not available
   */
  fallbackImage?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}
