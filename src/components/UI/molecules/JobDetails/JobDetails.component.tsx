import React from 'react'
import { IconItem } from '../../atoms'
import { IJobDetail, IDetailList } from './JobDetails.interface'
import styles from './JobDetails.module.scss'

const Component: React.FC<IJobDetail> = ({ jobDetailsList }) => {
  return (
    <div className={styles.JobDetailsComponent}>
      {jobDetailsList.map(({ detailText, Icon }: IDetailList, index: number) => (
        <div key={index} className={styles['DetailWrapper']}>
          <IconItem Icon={Icon} hover={false} size={16} />
          <p className={styles['DetailText']}>{detailText}</p>
        </div>
      ))}
    </div>
  )
}

/**
 * UI Molecule component for Job Detail
 */

export const JobDetails = Component
