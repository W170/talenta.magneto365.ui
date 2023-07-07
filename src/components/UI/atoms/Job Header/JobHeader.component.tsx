import React from 'react'
import { IJobHeader } from './JobHeader.interface'
import styles from './JobHeader.module.scss'

const Component: React.FC<IJobHeader> = ({ jobTitle, jobSubtitle, isMobile }) => {
  return (
    <div className={styles.JobHeaderComponent}>
      <h1>{jobTitle}</h1>
      {!isMobile && <h2>{jobSubtitle}</h2>}
    </div>
  )
}

/**
 * UI Atom component of Job Header
 */

export const JobHeader = Component