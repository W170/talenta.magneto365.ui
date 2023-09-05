import React from 'react'
import { IJobDetailCard } from './JobDetailCard.interface'
import styles from './JobDetailCard.modules.scss'

const Component: React.FC<IJobDetailCard> = ({ jobDetailCardText }) => {
  return (
    <div className={styles['magneto-ui-job-detail-card']}>
      {jobDetailCardText !== null ? (
        <div dangerouslySetInnerHTML={{ __html: jobDetailCardText }} />
      ) : (
        <div>{jobDetailCardText}</div>
      )}
    </div>
  )
}

/**
 * UI Molecule Component for Job Detail Card Header
 */

export const JobDetailCard = Component
