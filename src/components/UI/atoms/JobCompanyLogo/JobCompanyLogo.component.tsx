import React from 'react'
import { IJobCompanyLogo } from './JobCompanyLogo.interface'
import styles from './JobCompanyLogo.module.scss'

const Component: React.FC<IJobCompanyLogo> = ({ companyLogoImg, alt }) => {
  return (
    <div className={styles['magneto-ui-job-company-logo']}>
      <img src={companyLogoImg} alt={alt} />
    </div>
  )
}

/**
 * UI Atom component of Company Logo
 */

export const JobCompanyLogo = Component
