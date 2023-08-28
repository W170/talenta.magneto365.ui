import React from 'react'
import { MainButton } from '@components/UI/atoms'
import { IJobApplyCard, JobRequirementsElement } from './JobApplyCard.interface'
import styles from './JobApplyCard.module.scss'

const Component: React.FC<IJobApplyCard> = ({
  jobApplyCardHeader,
  jobApplyCardReqs,
  jobApplyButtonText,
  onHandlerClick
}) => {
  return (
    <div className={styles['magneto-ui-job-apply-card']}>
      <div className={styles['magneto-ui-job-apply-card__wrapper']}>
        <div className={styles['magneto-ui-job-apply-card__header']}>
          <h2>{jobApplyCardHeader}</h2>
          {jobApplyCardReqs.map(
            ({ jobRequirementTitle, jobRequirementInfo }: JobRequirementsElement, index: number) => (
              <div className={styles['magneto-ui-job-apply-card__requirements']} key={index}>
                <h3>{jobRequirementTitle}</h3>
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
