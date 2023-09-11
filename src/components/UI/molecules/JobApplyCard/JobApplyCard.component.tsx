import React from 'react'
import { IJobApplyCard, JobRequirementsElement } from './JobApplyCard.interface'
import styles from './JobApplyCard.module.scss'

const Component: React.FC<IJobApplyCard> = ({ offerApplyHeader, offerApplyElements, externalChild }) => {
  return (
    <div className={styles['magneto-ui-job-apply-card']}>
      <div className={styles['magneto-ui-job-apply-card__wrapper']}>
        <div className={styles['magneto-ui-job-apply-card__header']}>
          <h2>{offerApplyHeader}</h2>
          {offerApplyElements
            .filter(({ offerApplyInfo }) => !!offerApplyInfo)
            .map(({ offerApplyLabel, offerApplyInfo }: JobRequirementsElement, index: number) => (
              <div className={styles['magneto-ui-job-apply-card__requirements']} key={index}>
                <h3>{offerApplyLabel}</h3>
                <p>{offerApplyInfo}</p>
              </div>
            ))}
        </div>
        {externalChild}
      </div>
    </div>
  )
}
/**
 * UI Molecule Component for Job Apply Card
 */

export const JobApplyCard = Component
