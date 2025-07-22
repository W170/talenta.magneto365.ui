import React from 'react'
import { IconItem, ShareButton } from '../../atoms'
import { IJobFooterCard } from './JobFooterCard.interface'
import styles from './JobFooterCard.module.scss'
import { NoLogo } from '@constants/icons.constants'
import { altDynamicText } from '@constants/img.constants'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<IJobFooterCard> = ({
  offerFooterHeader,
  offerCompanyLogo,
  offerFooterList,
  iconList,
  shareButtonProps,
  companyImgAlt,
  companyName,
  externalChild,
  isApplied = false,
  variant = 'default',
  className
}) => {
  const jobFooterList = offerFooterList?.map(({ href, title, ariaLabel }, index) => ({
    icon: iconList && iconList[index],
    href,
    ariaLabel,
    title
  }))

  const isDetailedVariant = variant === 'detailed'

  return (
    <div className={cx('magneto-ui-job-footer-card', className)}>
      <img
        src={offerCompanyLogo ? offerCompanyLogo : NoLogo}
        alt={companyImgAlt ? companyImgAlt : `${altDynamicText.workAt} ${companyName}`}
        loading="lazy"
        width={'100px'}
        height={'100px'}
      />
      <div className={cx({ 'magneto-ui-job-footer-card__wrapper': isDetailedVariant })}>
        {!isApplied && isDetailedVariant && (
          <div className={cx('magneto-ui-job-footer-card__wrapper--apply-buttons')}>{externalChild}</div>
        )}
        <div className={cx('magneto-ui-job-footer-card__icons')}>
          <p>{offerFooterHeader}</p>
          <div className={cx('magneto-ui-job-footer-card__icons--wrapper')}>
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
            <div className={cx('magneto-ui__share-button')}>
              <ShareButton {...shareButtonProps} />
            </div>
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
