import React from 'react'
import { IJobHeader } from './JobHeader.interface'
import styles from './JobHeader.module.scss'

const Component: React.FC<IJobHeader> = ({ jobTitle, jobSubtitle, isHidden }) => {
  return (
    <div className={styles.JobHeaderComponent}>
      <h2>{jobTitle}</h2>
      {!isHidden && <h3>{jobSubtitle}</h3>}
    </div>
  )
}

/**
 * UI Atom component of Job Header
 */

export const JobHeader = Component
