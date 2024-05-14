import React, { useState } from 'react'
import { IconItem } from '../Icon'
import { IAvatar } from './Avatar.interface'
import styles from './Avatar.modules.scss'
import { User } from '../../../../constants/icons.constants'

const Component: React.FC<IAvatar> = ({ userImage, fallbackImage, onClick }) => {
  const [imageError, setImageError] = useState<boolean>(false)

  const handleError = () => {
    setImageError(true)
  }

  return (
    <div className={styles.avatarComponent} onClick={onClick}>
      {userImage && !imageError && <img src={userImage} alt="User Avatar" loading="lazy" onError={handleError} />}
      {(!userImage || imageError) && (
        <div className={styles['magneto-ui-default-avatar']}>
          <IconItem icon={fallbackImage || User} hover={false} />
        </div>
      )}
    </div>
  )
}

/**
 * UI Atom component of Avatar
 */

export const Avatar = Component
