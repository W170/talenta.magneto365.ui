import React from 'react'
import { IconItem } from '../../atoms'
import CitiesDetailDrawer from '../CitiesDetailDrawer/CitiesDetailDrawer.component'
import { IDetailList, IJobDetails } from './JobDetails.interface'
import styles from './JobDetails.module.scss'

const Component: React.FC<IJobDetails> = ({ offerDetailsList, iconList, altList, cities, textRemote, isRemote }) => {
  const jobDetailsList: IDetailList[] = offerDetailsList
    ?.map((offerDetailText, index) => ({
      icon: iconList && iconList[index],
      offerDetailText,
      alt: altList && altList[index]
    }))
    .filter(({ offerDetailText }, index) => !!offerDetailText && index !== 1)

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
        <CitiesDetailDrawer cities={cities} isRemote={isRemote} textRemote={textRemote} />
      </div>
    </div>
  )
}

/**
 * UI Molecule component for Job Detail
 */

Component.displayName = 'JobDetails'

export const JobDetails = Component
