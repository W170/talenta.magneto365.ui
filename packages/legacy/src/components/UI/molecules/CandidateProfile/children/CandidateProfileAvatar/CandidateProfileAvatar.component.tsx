import React from 'react'
import { ICandidateProfileAvatar } from './CandidateProfileAvatar.interface'
import { Avatar, RatingBadge } from '@components/UI/atoms'
import styles from './CandidateProfileAvatar.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateProfileAvatar> = ({ fallbackImage, onClick, score, userImage, ...props }) => {
  return (
    <div className={cx('magneto-ui-candidate-profile-avatar')} {...props}>
      <picture className={cx('magneto-ui-candidate-profile-avatar__picture')}>
        <Avatar userImage={userImage} fallbackImage={fallbackImage} onClick={onClick} />
      </picture>
      {score && (
        <div className={cx('magneto-ui-candidate-profile-avatar__score')}>
          <RatingBadge score={score} />
        </div>
      )}
    </div>
  )
}

/**
 * Molecule UI component child of candidate profile
 */
export const CandidateProfileAvatar = Component
