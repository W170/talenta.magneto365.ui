import React from 'react'
import { IconItem } from '../Icon'
import { IAvatar } from './Avatar.interface'
import styles from './Avatar.modules.scss'
import { User } from '../../../../constants/icons.constants'

const Component: React.FC<IAvatar> = ({ userImage, onClick }) => {
  return (
    <div className={styles.avatarComponent} onClick={onClick}>
      {userImage && <img src={userImage} alt="User Avatar" loading="lazy" />}
      {!userImage && (
        <div className={styles['magneto-ui-default-avatar']}>
          <IconItem icon={User} hover={false} />
        </div>
      )}
    </div>
  )
}

/**
 * UI Atom component of Avatar
 */

export const Avatar = Component
