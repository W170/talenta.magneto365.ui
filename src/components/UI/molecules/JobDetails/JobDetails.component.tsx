import React from 'react'
import { IconItem } from '../../atoms'
import { IDetailList, IJobDetails } from './JobDetails.interface'
import styles from './JobDetails.module.scss'

const Component: React.FC<IJobDetails> = ({ offerDetailsList, iconList, altList }) => {
  const jobDetailsList: IDetailList[] = offerDetailsList
    ?.map((offerDetailText, index) => ({
      icon: iconList && iconList[index],
      offerDetailText,
      alt: altList && altList[index]
    }))
    .filter(({ offerDetailText }) => !!offerDetailText)

  return (
    <div className={styles['magneto-ui-job-details']}>
      <div className={styles['magneto-ui-job-details__wrapper']}>
        {jobDetailsList?.length &&
          jobDetailsList?.map(({ offerDetailText, icon, alt = '' }) => (
            <div key={`${offerDetailText}-JobDetails`} className={styles['magneto-ui-job-details__item-detail']}>
              <div className={styles['magneto-ui-job-details__item-detail-icon']}>
                <IconItem alt={alt} icon={icon} hover={false} size={16} />
              </div>
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
