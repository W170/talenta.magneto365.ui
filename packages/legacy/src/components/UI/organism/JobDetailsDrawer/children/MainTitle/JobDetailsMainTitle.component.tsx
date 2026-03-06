import React from 'react'
import { IMainTitleJobDetails } from './JobDetailsMainTitle.interface'
const Component: React.FC<IMainTitleJobDetails> = ({ title, styles }) => {
  return <h1 className={styles}>{title && title}</h1>
}

/**
 * UI Children H1 Component for JobDetailsDrawer
 */

export const MainTitleJobDetails = Component
