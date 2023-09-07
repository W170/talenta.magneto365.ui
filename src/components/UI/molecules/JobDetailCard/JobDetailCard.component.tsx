import React from 'react'
import { IJobDetailCard } from './JobDetailCard.interface'
import styles from './JobDetailCard.modules.scss'

const Component: React.FC<IJobDetailCard> = ({ offerDescription }) => {
  return (
    <div className={styles['magneto-ui-job-detail-card']}>
      {offerDescription !== null ? (
        <div dangerouslySetInnerHTML={{ __html: offerDescription }} />
      ) : (
        <div>{offerDescription}</div>
      )}
    </div>
  )
}

/**
 * UI Molecule Component for Job Detail Card Header
 */

export const JobDetailCard = Component
