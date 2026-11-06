import React, { forwardRef, useState } from 'react'
import { IconItem } from '../Icon'
import { IAvatar } from './Avatar.interface'
import styles from './Avatar.modules.scss'
import { User } from '../../../../constants/icons.constants'

const BaseComponent: React.ForwardRefRenderFunction<HTMLDivElement, IAvatar> = (
  { userImage, fallbackImage, onClick, ...ariaProps },
  ref
) => {
  const [imageError, setImageError] = useState<boolean>(false)

  const handleError = () => {
    setImageError(true)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <div
      ref={ref}
      className={styles.avatarComponent}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...ariaProps}
    >
      {userImage && !imageError && <img src={userImage} alt="User Avatar" loading="lazy" onError={handleError} />}
      {(!userImage || imageError) && (
        <div className={styles['magneto-ui-default-avatar']}>
          <IconItem icon={fallbackImage || User} hover={false} />
        </div>
      )}
    </div>
  )
}

const Component = forwardRef(BaseComponent)

/**
 * UI Atom component of Avatar
 */

export const Avatar = Component
