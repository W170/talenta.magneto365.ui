import React from 'react'
import styles from './JobSuggestedDrawer.module.scss'
import { JobSuggestedHeader } from './children/JobSuggestedHeader'
import { JobSuggestedSimilarJobs } from './children/JobSuggestedSimilarJobs'
import { classNames } from '@shared/utils/common'
import { IJobSuggestedDrawer } from './JobSuggestedDrawer.interface'
import { AlertJobStatus } from '@components/UI/molecules/AlertJobStatus'
import { JobDetailsSkeleton } from '../JobDetailsDrawer/children'

const cx = classNames.bind(styles)

const Component: React.FC<IJobSuggestedDrawer> = ({ isLoading, children, className }) => {
  if (isLoading) return <JobDetailsSkeleton />
  return <section className={cx('magneto-ui--job-drawer', className)}>{children}</section>
}

export const JobSuggestedDrawer = Object.assign(Component, {
  Header: JobSuggestedHeader,
  Alert: AlertJobStatus,
  SimilarJobs: JobSuggestedSimilarJobs
})
