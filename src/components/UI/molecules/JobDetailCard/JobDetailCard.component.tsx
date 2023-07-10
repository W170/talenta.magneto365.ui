import React from 'react'
import { IJobDetailCard } from './JobDetailCard.interface'
import styles from './JobDetailCard.modules.scss'

const Component: React.FC<IJobDetailCard> = ({ jobDetailCardHeader, jobDetailCardText }) => {
  return (
    <div className={styles.JobDetailCardComponent}>
      <h1>{jobDetailCardHeader}</h1>
      <p>{jobDetailCardText}</p>
    </div>
  )
}

/**
 * UI Molecule Component for Job Detail Card Header
 */

export const JobDetailCardHeader = Component
