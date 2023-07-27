import React from 'react'
import { IJobCompanyLogo } from './JobCompanyLogo.interface'
import styles from './JobCompanyLogo.module.scss'

const Component: React.FC<IJobCompanyLogo> = ({ companyLogoImg, alt, isHidden }) => {
  return (
    <React.Fragment>
      {!isHidden && (
        <div className={styles.JobCompanyLogoComponent}>
          <img src={companyLogoImg} alt={alt} />
        </div>
      )}
    </React.Fragment>
  )
}

/**
 * UI Atom component of Company Logo
 */

export const JobCompanyLogo = Component
