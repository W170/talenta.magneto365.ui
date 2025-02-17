import React from 'react'
import { IRatingBadge } from './RatingBadge.interface'
import { Start } from '@constants/icons.constants'
import { classNames } from '@shared/utils/common'
import styles from './RatingBadge.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<IRatingBadge> = ({ score }) => {
  return (
    <div className={cx('magneto-ui-rating-badge')}>
      <div className={cx('magneto-ui-rating-badge__container')}>
        <img src={Start} alt={Start} className={cx('magneto-ui-rating-badge__icon')} />
        <span className={cx('magneto-ui-rating-badge__score')}>{score}</span>
      </div>
    </div>
  )
}

export const RatingBadge = Component
