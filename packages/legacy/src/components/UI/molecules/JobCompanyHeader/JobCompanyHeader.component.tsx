import React from 'react'
import { JobHeader } from '@components/UI/atoms'
import { IJobCompanyHeader } from './JobCompanyHeader.interface'
import styles from './JobCompanyHeader.module.scss'
import { anchorIconList } from '@constants/stories'
import { JobActions } from '@components/UI/molecules'
import { JobCompanyLogo } from '@components/Domain/Jobs/JobCompanyLogo'

const Component: React.FC<IJobCompanyHeader> = ({
  jobCompanyLogoProps,
  jobHeaderProps,
  jobActionsProps,
  isApplied
}) => {
  return (
    <div className={styles['magneto-ui-job-company-header']}>
      <JobCompanyLogo {...jobCompanyLogoProps} />
      <div className={styles['magneto-ui-job-company-header__data-actions']}>
        <JobHeader {...jobHeaderProps} />
        {isApplied && jobActionsProps && (
          <JobActions isApplied={isApplied} actionsAnchorIcons={anchorIconList} {...jobActionsProps} />
        )}
      </div>
    </div>
  )
}

/**
 * UI Molecule component for Company Job Header
 */

export const JobCompanyHeader = Component
