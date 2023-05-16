import React from 'react'
import { IAvatar } from './Avatar.interface'
import { withStyles } from './Avatar.styles'

const Component: React.FC<IAvatar> = ({ className, userImage, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={userImage} alt="User Avatar" />
    </div>
  )
}

/**
 * UI Atom component of Avatar
 */

export const Avatar = withStyles(Component)
