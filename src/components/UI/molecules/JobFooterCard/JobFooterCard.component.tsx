import React from 'react'
import { IconItem } from '../../atoms'
import { IJobFooterCard } from './JobFooterCard.interface'
import styles from './JobFooterCard.module.scss'

const Component: React.FC<IJobFooterCard> = ({
  jobFooterCompanyImg,
  companyImgAlt,
  jobFooterHeader,
  jobFooterLinks
}) => {
  return (
    <div className={styles['magneto-ui-job-footer-card']}>
      <img src={jobFooterCompanyImg} alt={companyImgAlt} />
      <div className={styles['magneto-ui-job-footer-card__icons']}>
        <h2>{jobFooterHeader}</h2>
        <div className={styles['magneto-ui-job-footer-card__wrapper']}>
          {jobFooterLinks.map(
            ({ url, icon }, index: number) =>
              url !== null && (
                <a key={index} href={url} target="" rel="">
                  <IconItem hover={false} icon={icon || undefined} />
                </a>
              )
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * UI Molecule component for Job Footer Card
 */

export const JobFooterCard = Component
