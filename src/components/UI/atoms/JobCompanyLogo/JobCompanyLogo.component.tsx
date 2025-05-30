import React from 'react'
import { IJobCompanyLogo } from './JobCompanyLogo.interface'
import styles from './JobCompanyLogo.module.scss'
import { NoLogo } from '@constants/icons.constants'

const Component: React.FC<IJobCompanyLogo> = ({ offerCompanyLogo, alt }) => {
  if (typeof offerCompanyLogo === 'string' || !offerCompanyLogo) {
    return (
      <div className={styles['magneto-ui-job-company-logo']}>
        <img
          src={offerCompanyLogo ? offerCompanyLogo : NoLogo}
          loading="lazy"
          width={'100px'}
          height={'100px'}
          alt={alt}
        />
      </div>
    )
  }

  return <div className={styles['magneto-ui-job-company-logo']}>{offerCompanyLogo}</div>
}

/**
 * UI Atom component of Company Logo
 */

export const JobCompanyLogo = Component
