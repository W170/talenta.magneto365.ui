import React from 'react'
import { ISubTitleJobDetails } from './JobDetailsSubTitle.interface'

const Component: React.FC<ISubTitleJobDetails> = ({ title, styles }) => {
  return <p className={styles}>{title && title}</p>
}

/**
 * UI Children P Component for JobDetailsDrawer
 */

export const SubTitleJobDetails = Component
