export interface IAvatar {
  /**
   * Sets the user image
   */
  userImage: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  className?: string
}
