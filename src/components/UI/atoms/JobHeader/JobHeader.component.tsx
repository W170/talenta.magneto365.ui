import React from 'react'
import { IJobHeader } from './JobHeader.interface'
import styles from './JobHeader.module.scss'

const Component: React.FC<IJobHeader> = ({ offerTitle, offerCompanyName, isHidden }) => {
  return (
    <div className={styles['magneto-ui-job-header']}>
      <h2 className={styles['magneto-ui-job-header__title']}>{offerTitle}</h2>
      {!isHidden && <h3 className={styles['magneto-ui-job-header__subtitle']}>{offerCompanyName}</h3>}
    </div>
  )
}

/**
 * UI Atom component of Job Header
 */

export const JobHeader = Component
