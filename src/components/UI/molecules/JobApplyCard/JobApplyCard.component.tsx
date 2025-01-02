import React from 'react'
import { IJobApplyCard, JobRequirementsElement } from './JobApplyCard.interface'
import styles from './JobApplyCard.module.scss'

const Component: React.FC<IJobApplyCard> = ({ offerApplyHeader, offerApplyElements, externalChild, isApplied }) => {
  return (
    <div className={styles['magneto-ui-job-apply-card']}>
      <div className={styles['magneto-ui-job-apply-card__wrapper']}>
        <div className={styles['magneto-ui-job-apply-card__header']}>
          <p>{offerApplyHeader}</p>
          {offerApplyElements?.length &&
            offerApplyElements
              .filter(({ offerApplyInfo }) => !!offerApplyInfo)
              .map(({ offerApplyLabel, offerApplyInfo }: JobRequirementsElement) => (
                <div
                  className={styles['magneto-ui-job-apply-card__requirements']}
                  key={`${offerApplyLabel}-JobApplyCard`}
                >
                  <p>{offerApplyLabel}</p>
                  <p>{offerApplyInfo}</p>
                </div>
              ))}
        </div>
        {!isApplied && <div id={styles['magneto-ui__external-child']}>{externalChild}</div>}
      </div>
    </div>
  )
}
/**
 * UI Molecule Component for Job Apply Card
 */

export const JobApplyCard = Component
