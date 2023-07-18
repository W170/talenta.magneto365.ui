import React from 'react'
import { IJobDetailCard } from './JobDetailCard.interface'

import styles from './JobDetailCard.modules.scss'

const Component: React.FC<IJobDetailCard> = ({ jobDetailCardText }) => {
  return (
    <div className={styles.JobDetailCardComponent}>
      <div dangerouslySetInnerHTML={{ __html: jobDetailCardText }} />
    </div>
  )
}

/**
 * UI Molecule Component for Job Detail Card Header
 */

export const JobDetailCard = Component
