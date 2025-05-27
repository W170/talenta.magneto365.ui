import { SearchItem } from '@components/UI/atoms'
import { companyCardPrefix } from '@constants/stories'
import { classNames } from '@shared/utils/common'
import React from 'react'
import styles from './CompanyCard.module.scss'
import { ICompanyCardProps, IWithDescriptionProps, IWithoutDescriptionProps } from './CompanyCard.interface'
const cx = classNames.bind(styles)

const Component: React.FC<ICompanyCardProps> = (props) => {
  const {
    className,
    logo,
    companyName,
    backgroundColor = '#F0F1F3',
    companyCardType = 'withDescription',
    buttonLink
  } = props

  if (companyCardType === 'withDescription') {
    const { description, buttonText, jobCount } = props as IWithDescriptionProps
    return (
      <div className={cx(companyCardPrefix, className)} style={{ backgroundColor }}>
        <div className={styles[`${companyCardPrefix}__header`]}>
          <img src={logo} alt={companyName} className={styles[`${companyCardPrefix}__logo`]} loading="lazy" />
          <div className={styles[`${companyCardPrefix}__title`]}>
            <h3 className={styles[`${companyCardPrefix}__name`]}>{companyName}</h3>
            <p className={styles[`${companyCardPrefix}__job-count`]}>{jobCount}</p>
          </div>
        </div>
        <div className={styles[`${companyCardPrefix}__content`]}>
          <p className={styles[`${companyCardPrefix}__description`]}>{description}</p>
        </div>
        <div className={styles[`${companyCardPrefix}__footer`]}>
          <SearchItem tag={buttonText} url={buttonLink} className={styles[`${companyCardPrefix}__footer-button`]} />
        </div>
      </div>
    )
  } else {
    const { vacantTitle, salary } = props as IWithoutDescriptionProps
    return (
      <div className={cx(`${companyCardPrefix}__with-desc`, className)} style={{ backgroundColor }}>
        <div className={styles[`${companyCardPrefix}__header`]}>
          <img src={logo} alt={companyName} className={styles[`${companyCardPrefix}__logo`]} loading="lazy" />
          <div className={styles[`${companyCardPrefix}__with-desc__title`]}>
            <h3 className={styles[`${companyCardPrefix}__vacant-title`]}>{vacantTitle}</h3>
            <h4 className={styles[`${companyCardPrefix}__vacant-company`]}>{companyName}</h4>
            <p className={styles[`${companyCardPrefix}__vacant-company-salary`]}>{salary}</p>
          </div>
        </div>
      </div>
    )
  }
}

export const CompanyCard = Component
