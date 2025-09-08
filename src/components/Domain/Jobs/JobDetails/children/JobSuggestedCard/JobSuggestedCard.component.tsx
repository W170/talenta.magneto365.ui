import React from 'react'
import styles from './JobSuggestedCard.module.scss'
import { IJobSuggestedCard } from './JobSuggestedCard.interface'
import { JobSuggestedSection } from './children/JobSuggestedSection'

const Component: React.FC<IJobSuggestedCard> = ({ children, className }) => {
  return <div className={`${styles['job-suggested-card']} ${className || ''}`}>{children}</div>
}

export const JobSuggestedCard = Object.assign(Component, {
  Section: JobSuggestedSection
})
