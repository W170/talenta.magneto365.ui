import React from 'react'
import { JobCompanyLogo, JobHeader } from '@components/UI/atoms'
import { IJobCompanyHeader } from './JobCompanyHeader.interface'
import styles from './JobCompanyHeader.module.scss'

const Component: React.FC<IJobCompanyHeader> = ({ jobCompanyLogoProps, jobHeaderProps }) => {
  return (
    <div className={styles['magneto-ui-job-company-header']}>
      <JobCompanyLogo {...jobCompanyLogoProps} />
      <JobHeader {...jobHeaderProps} />
    </div>
  )
}

/**
 * UI Molecule component for Company Job Header
 */

export const JobCompanyHeader = Component
