import React from 'react'
import { IconItem } from '../../atoms'
import { IJobFooterCard } from './JobFooterCard.interface'
import styles from './JobFooterCard.module.scss'

const Component: React.FC<IJobFooterCard> = ({
  offerFooterHeader,
  offerCompanyLogo,
  offerFooterList,
  iconList,
  externalChild,
  companyImgAlt
}) => {
  const jobFooterList = offerFooterList?.map(({ href, ariaLabel }, index) => ({
    icon: iconList && iconList[index],
    href,
    ariaLabel
  }))

  return (
    <div className={styles['magneto-ui-job-footer-card']}>
      <img src={offerCompanyLogo} alt={companyImgAlt} />
      <div className={styles['magneto-ui-job-footer-card__icons']}>
        <h2>{offerFooterHeader}</h2>
        <div className={styles['magneto-ui-job-footer-card__wrapper']}>
          {jobFooterList?.length &&
            jobFooterList?.map(
              ({ href, ariaLabel, icon }) =>
                href !== null && (
                  <a key={`${href}-jobFooterList`} href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
                    <IconItem hover={false} icon={icon || undefined} />
                  </a>
                )
            )}
          <div className={styles['magneto-ui__external-child']}>{externalChild}</div>
        </div>
      </div>
    </div>
  )
}

/**
 * UI Molecule component for Job Footer Card
 */

export const JobFooterCard = Component
