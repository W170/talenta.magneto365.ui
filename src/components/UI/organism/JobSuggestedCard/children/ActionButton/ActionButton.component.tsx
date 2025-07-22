import React from 'react'
import styles from './ActionButton.module.scss'
import { classNames } from '@shared/utils/common'
import { IJobSuggestedCard } from '../../JobSuggestedCard.interface'

const cx = classNames.bind(styles)
const Component: React.FC<IJobSuggestedCard.Button> = ({ className, children, variant = 'primary', ...props }) => {
  return (
    <button {...props} className={cx('action-button', variant, className)}>
      {children}
    </button>
  )
}

export const ActionButton = Component
