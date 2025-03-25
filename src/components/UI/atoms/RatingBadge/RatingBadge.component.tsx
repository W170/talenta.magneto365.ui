import React from 'react'
import { StarBoldYellow } from '@constants/icons.constants'
import { IRatingBadge } from './RatingBadge.interface'
import { classNames } from '@shared/utils/common'
import styles from './RatingBadge.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<IRatingBadge> = ({ score }) => {
  return (
    <div className={cx('magneto-ui-rating-badge')}>
      <div className={cx('magneto-ui-rating-badge__container')}>
        <img src={StarBoldYellow} alt={StarBoldYellow} className={cx('magneto-ui-rating-badge__icon')} />
        <span className={cx('magneto-ui-rating-badge__score')}>{score}</span>
      </div>
    </div>
  )
}

/**
 * Atom UI component of Rating Badge
 */
export const RatingBadge = Component
