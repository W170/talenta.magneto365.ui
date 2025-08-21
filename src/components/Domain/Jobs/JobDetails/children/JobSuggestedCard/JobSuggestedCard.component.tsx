import React from 'react'
import styles from './JobSuggestedCard.module.scss'
import { classNames } from '@shared/utils/common'
import { IJobSuggestedCard } from './JobSuggestedCard.interface'
import { JobSuggestedSection } from './children/JobSuggestedSection'

const cx = classNames.bind(styles)
const Component: React.FC<IJobSuggestedCard> = ({ children, className }) => {
  return <div className={cx('job-suggested-card', className)}>{children}</div>
}

export const JobSuggestedCard = Object.assign(Component, {
  Section: JobSuggestedSection
})
