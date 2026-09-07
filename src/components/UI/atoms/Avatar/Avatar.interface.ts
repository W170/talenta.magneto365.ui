import type { AriaAttributes } from 'react'

export interface IAvatar extends AriaAttributes {
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
