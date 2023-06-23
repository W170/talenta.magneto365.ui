import React from 'react'
import { IAvatar } from './Avatar.interface'
import { IconItem } from '../Icon'
import { User } from 'iconsax-react'
import styles from './Avatar.modules.scss' // Import the CSS file

const Avatar: React.FC<IAvatar> = ({ userImage, onClick }) => {
  return (
    <div className={styles.avatar} onClick={onClick}>
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

export default Avatar
