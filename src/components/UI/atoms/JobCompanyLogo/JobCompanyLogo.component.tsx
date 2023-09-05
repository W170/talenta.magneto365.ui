import React from 'react'
import { IJobCompanyLogo } from './JobCompanyLogo.interface'
import styles from './JobCompanyLogo.module.scss'

const Component: React.FC<IJobCompanyLogo> = ({ companyLogo, alt }) => {
  if (typeof companyLogo === 'string') {
    return (
      <div className={styles['magneto-ui-job-company-logo']}>
        <img src={companyLogo} alt={alt} />
      </div>
    )
  }

  return <div className={styles['magneto-ui-job-company-logo']}>{companyLogo}</div>
}

/**
 * UI Atom component of Company Logo
 */

export const JobCompanyLogo = Component
