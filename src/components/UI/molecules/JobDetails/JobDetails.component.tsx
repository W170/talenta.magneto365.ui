import React from 'react'
import { IconItem } from '../../atoms'
import { IJobDetails, IDetailList } from './JobDetails.interface'
import styles from './JobDetails.module.scss'

const Component: React.FC<IJobDetails> = ({ offerDetailsList, iconList }) => {
  const jobDetailsList: IDetailList[] = offerDetailsList
    .map((offerDetailText, index) => ({
      icon: iconList[index],
      offerDetailText
    }))
    .filter(({ offerDetailText }) => offerDetailText !== 'null')

  return (
    <div className={styles['magneto-ui-job-details']}>
      <div className={styles['magneto-ui-job-details__wrapper']}>
        {jobDetailsList.map(({ offerDetailText, icon }, index: number) => (
          <div key={index} className={styles['magneto-ui-job-details__item-detail']}>
            <IconItem icon={icon} hover={false} size={16} />
            <p className={styles['magneto-ui-job-details__item-detail-text']}>{offerDetailText}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * UI Molecule component for Job Detail
 */

export const JobDetails = Component
