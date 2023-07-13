import React from 'react'
import styles from './JobApplyCard.module.scss'
import { IJobApplyCard, JobRequirementsElement } from './JobApplyCard.interface'

const Component: React.FC<IJobApplyCard> = ({ jobApplyCardHeader, jobApplyCardReqs, jobApplyButtonText }) => {
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
        <button>{jobApplyButtonText}</button>
      </div>
    </div>
  )
}
/**
 * UI Molecule Component for Job Apply Card
 */

export const JobApplyCard = Component

//
