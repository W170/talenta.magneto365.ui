import React from 'react'
import { IconItem, ShareButton } from '../../atoms'
import { IJobFooterCard } from './JobFooterCard.interface'
import styles from './JobFooterCard.module.scss'
import { NoLogo } from '@constants/icons.constants'

const Component: React.FC<IJobFooterCard> = ({
  offerFooterHeader,
  offerCompanyLogo,
  offerFooterList,
  iconList,
  shareButtonProps,
  companyImgAlt
}) => {
  const jobFooterList = offerFooterList?.map(({ href, title, ariaLabel }, index) => ({
    icon: iconList && iconList[index],
    href,
    ariaLabel,
    title
  }))

  return (
    <div className={styles['magneto-ui-job-footer-card']}>
      <img
        src={offerCompanyLogo ? offerCompanyLogo : NoLogo}
        alt={companyImgAlt}
        loading="lazy"
        width={'100px'}
        height={'100px'}
      />
      <div className={styles['magneto-ui-job-footer-card__icons']}>
        <p>{offerFooterHeader}</p>
        <div className={styles['magneto-ui-job-footer-card__wrapper']}>
          {jobFooterList?.length &&
            jobFooterList?.map(
              ({ href, ariaLabel, icon, title }, i) =>
                href !== null && (
                  <a
                    key={`${href}-jobFooterList` + i}
                    title={title}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={ariaLabel}
                  >
                    <IconItem hover={false} icon={icon || undefined} />
                  </a>
                )
            )}
          <div className={styles['magneto-ui__share-button']}>
            <ShareButton {...shareButtonProps} />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * UI Molecule component for Job Footer Card
 */

export const JobFooterCard = Component
