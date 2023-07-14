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
    <div className={styles.JobDetailsComponent}>
      <div className={styles['JobDetailsWrapper']}>
        {jobDetailsList.map(({ detailText, Icon }: IDetailList, index: number) => (
          <div key={index} className={styles['DetailWrapper']}>
            <IconItem Icon={Icon} hover={false} size={16} />
            <p className={styles['DetailText']}>{detailText}</p>
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
