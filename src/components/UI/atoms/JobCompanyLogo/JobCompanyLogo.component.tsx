import React from 'react'
import { IJobCompanyLogo } from './JobCompanyLogo.interface'
import styles from './JobCompanyLogo.module.scss'

const Component: React.FC<IJobCompanyLogo> = ({ offerCompanyLogo }) => {
  if (typeof offerCompanyLogo === 'string') {
    return (
      <div className={styles['magneto-ui-job-company-logo']}>
        <img src={offerCompanyLogo} />
      </div>
    )
  }

  return <div className={styles['magneto-ui-job-company-logo']}>{offerCompanyLogo}</div>
}

/**
 * UI Atom component of Company Logo
 */

export const JobCompanyLogo = Component
