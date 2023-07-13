import React from 'react'
import { CompanyJobHeader } from '../CompanyJobHeader'
import { JobActions } from '../JobActions'
import { IJobHeaderCard } from './JobHeaderCard.interface'
import styles from './JobHeaderCard.module.scss'

const Component: React.FC<IJobHeaderCard> = ({ companyJobHeader, jobActions }) => {
  return (
    <div className={styles.JobHeaderCardComponent}>
      <CompanyJobHeader {...companyJobHeader} />
      <JobActions {...jobActions} />
    </div>
  )
}

/**
 * UI Molecule for Job Header Card
 */

export const JobHeaderCard = Component
