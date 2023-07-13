import React from 'react'
import { CompanyLogo, JobHeader } from '../../atoms'
import { ICompanyJobHeader } from './CompanyJobHeader.interface'
import styles from './CompanyJobHeader.module.scss'

const Component: React.FC<ICompanyJobHeader> = ({ companyLogoProps, jobHeaderProps }) => {
  return (
    <div className={styles.CompanyJobHeaderComponent}>
      <CompanyLogo {...companyLogoProps} />
      <JobHeader {...jobHeaderProps} />
    </div>
  )
}

/**
 * UI Molecule component for Company Job Header
 */

export const CompanyJobHeader = Component
