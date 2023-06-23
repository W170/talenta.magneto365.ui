import React from 'react'
import { IconItem } from '../Icon'
import { User } from 'iconsax-react'
import { IAvatar } from './Avatar.interface'
import styles from './Avatar.modules.scss'

const Component: React.FC<IAvatar> = ({ userImage, onClick }) => {
  return (
    <div className={styles.avatarComponent} onClick={onClick}>
      {userImage && <img src={userImage} alt="User Avatar" />}
      {!userImage && (
        <div className={styles['magneto-ui-default-avatar']}>
          <IconItem Icon={User} hover={false} />
        </div>
      )}
    </div>
  )
}

/**
 * UI Atom component of Avatar
 */

export const Avatar = Component
