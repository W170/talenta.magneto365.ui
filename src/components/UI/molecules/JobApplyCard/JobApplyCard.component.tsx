import React from 'react'
import styles from './JobApplyCard.module.scss'
import { IJobApplyCard, JobRequirementsElement } from './JobApplyCard.interface'
import { MainButton } from '@components/UI/atoms'

const Component: React.FC<IJobApplyCard> = ({
  jobApplyCardHeader,
  jobApplyCardReqs,
  jobApplyButtonText,
  onHandlerClick
}) => {
  return (
    <div className={styles.JobApplyCardComponent}>
      <div className={styles['JobApplyCardWrapper']}>
        <div className={styles['JobApplyHeader']}>
          <h1>{jobApplyCardHeader}</h1>
          {jobApplyCardReqs.map(
            ({ jobRequirementTitle, jobRequirementInfo }: JobRequirementsElement, index: number) => (
              <div className={styles['JobRequirements']} key={index}>
                <h2>{jobRequirementTitle}</h2>
                <p>{jobRequirementInfo}</p>
              </div>
            )
          )}
        </div>
        <MainButton buttonType="button" buttonText={jobApplyButtonText} onClick={onHandlerClick} />
      </div>
    </div>
  )
}
/**
 * UI Molecule Component for Job Apply Card
 */

export const JobApplyCard = Component
