export interface IAvatar {
  /**
   * Sets the user image
   */
  userImage?: string | null
  /**
   * Optional click handler
   */
  onClick?: () => void
  className?: string
}
