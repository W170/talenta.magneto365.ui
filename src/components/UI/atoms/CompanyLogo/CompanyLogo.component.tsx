import React from 'react'
import { ICompanyLogo } from './CompanyLogo.interface'
import styles from './CompanyLogo.module.scss'

const Component: React.FC<ICompanyLogo> = ({ companyLogoImg, alt, isHidden }) => {
  return (
    <React.Fragment>
      {!isHidden && (
        <div className={styles.CompanyLogoComponent}>
          <img src={companyLogoImg} alt={alt} />
        </div>
      )}
    </React.Fragment>
  )
}

/**
 * UI Atom component of Company Logo
 */

export const CompanyLogo = Component
