import React from 'react'
import { IJobSuggestedDrawer } from '../../JobSuggestedDrawer.interface'
import styles from './JobSuggestedHeader.module.scss'
import { JobCompanyHeader } from '@components/UI/molecules'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

export const JobSuggestedHeader: React.FC<IJobSuggestedDrawer.Header> = (jobCompanySuggestedHeaderProps) => {
  return (
    <div className={cx('magneto-ui-job-company-header', jobCompanySuggestedHeaderProps.className)}>
      <JobCompanyHeader {...jobCompanySuggestedHeaderProps} />
    </div>
  )
}
