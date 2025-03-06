import React from 'react'
import { IRating } from './rating.interface'
import { classNames } from '@shared/utils/common'
import styles from './rating.module.scss'
import { StartDark } from '@constants/icons.constants'
const cx = classNames.bind(styles)

const Component: React.FC<IRating> = ({ rating, ...props }) => {
  const componentRating = (value: number) => (
    <div className={cx('rating')} {...props}>
      <img src={StartDark} />
      <div className={cx('rating_number')}>{value.toFixed(1)}</div>
    </div>
  )

  if (rating) {
    return componentRating(rating)
  }

  return null
}
/**
 *  Molecule UI component of Candidate Comments
 */
export const Rating = Component
