import React from 'react'
import { IconItem } from '../../atoms'
import { IJobDetails, IDetailList } from './JobDetails.interface'
import styles from './JobDetails.module.scss'

const Component: React.FC<IJobDetails> = ({ detailsTextList, iconList }) => {
  const jobDetailsList: IDetailList[] = detailsTextList.map((detailText, index) => ({
    Icon: iconList && iconList[index] ? iconList[index] : undefined,
    detailText
  }))

  return (
    <div className={styles['magneto-ui-job-details']}>
      <div className={styles['magneto-ui-job-details__wrapper']}>
        {jobDetailsList.map(({ detailText, Icon }: IDetailList, index: number) => (
          <div key={index} className={styles['magneto-ui-job-details__item-detail']}>
            <IconItem Icon={Icon} hover={false} size={16} />
            <p className={styles['magneto-ui-job-details__item-detail-text']}>{detailText}</p>
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
