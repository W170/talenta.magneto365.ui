// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useLayoutEffect, useState } from 'react'
import { JobCompanyLogo, JobHeader } from '../../atoms'
import { IJobCompanyHeader } from './JobCompanyHeader.interface'
import styles from './JobCompanyHeader.module.scss'

const Component: React.FC<IJobCompanyHeader> = ({ jobCompanyLogoProps, jobHeaderProps }) => {
  return (
    <div className={styles.JobCompanyHeaderComponent}>
      <JobCompanyLogo {...jobCompanyLogoProps} />
      <JobHeader {...jobHeaderProps} />
    </div>
  )
}

/**
 * UI Molecule component for Company Job Header
 */

export const JobCompanyHeader = Component
