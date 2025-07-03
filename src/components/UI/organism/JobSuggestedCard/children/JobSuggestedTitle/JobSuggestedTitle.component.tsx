import React from 'react'
import styles from './JobSuggestedTitle.module.scss'
import { classNames } from '@shared/utils/common'
import { IJobSuggestedCard } from '../../JobSuggestedCard.interface'

const cx = classNames.bind(styles)
const Component: React.FC<IJobSuggestedCard.Title> = ({ children, className }) => {
  return <div className={cx('title', className)}>{children}</div>
}

export const JobSuggestedTitle = Component
