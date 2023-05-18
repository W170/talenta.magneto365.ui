import React from 'react'
import { IAvatar } from './Avatar.interface'
import { withStyles } from './Avatar.styles'
import { IconItem } from '../Icon'
import { User } from 'iconsax-react'

const Component: React.FC<IAvatar> = ({ className, userImage, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {userImage && <img src={userImage} alt="User Avatar" />}
      {!userImage && (
        <div className="magneto-ui-default-avatar">
          <IconItem Icon={User} hover={true} />
        </div>
      )}
    </div>
  )
}

/**
 * UI Atom component of Avatar
 */

export const Avatar = withStyles(Component)
