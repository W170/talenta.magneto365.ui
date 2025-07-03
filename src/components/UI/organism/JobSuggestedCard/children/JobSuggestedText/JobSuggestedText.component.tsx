import React from 'react'
import styles from './JobSuggestedText.module.scss'
import { classNames } from '@shared/utils/common'
import { IJobSuggestedCard } from '../../JobSuggestedCard.interface'

const cx = classNames.bind(styles)
const Component: React.FC<IJobSuggestedCard.Text> = ({ children, className }) => {
  return <p className={cx('text', className)}>{children}</p>
}

export const JobSuggestedText = Component
