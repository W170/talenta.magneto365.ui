import { SearchItem } from '@components/UI/atoms'
import { companyCardPrefix } from '@constants/stories'
import { classNames } from '@shared/utils/common'
import React from 'react'
import styles from './CompanyCard.module.scss'
import {
  ICompanyCardProps,
  IWithDescriptionCardProps,
  IWithDescriptionProps,
  IWithoutDescriptionCardProps,
  IWithoutDescriptionProps
} from './CompanyCard.interface'
const cx = classNames.bind(styles)

const WithDescriptionCard: React.FC<IWithDescriptionCardProps> = ({
  className,
  backgroundColor,
  logo,
  companyName,
  headerContent,
  mainContent,
  footerContent
}) => (
  <div className={cx(companyCardPrefix, `${companyCardPrefix}__bg--${backgroundColor}`, className)}>
    <div className={styles[`${companyCardPrefix}__header`]}>
      <img src={logo} alt={companyName} className={styles[`${companyCardPrefix}__logo`]} loading="lazy" />
      {headerContent}
    </div>
    {mainContent}
    {footerContent}
  </div>
)

const WithoutDescriptionCard: React.FC<IWithoutDescriptionCardProps> = ({
  className,
  backgroundColor,
  logo,
  companyName,
  buttonLink,
  headerContent
}) => (
  <div className={cx(`${companyCardPrefix}__withoutDesc`, `${companyCardPrefix}__bg--${backgroundColor}`, className)}>
    <a href={buttonLink}>
      <div className={styles[`${companyCardPrefix}__header`]}>
        <img src={logo} alt={companyName} className={styles[`${companyCardPrefix}__logo`]} loading="lazy" />
        {headerContent}
      </div>
    </a>
  </div>
)

export const CompanyCardWithDescription: React.FC<IWithDescriptionProps> = ({
  className,
  logo,
  companyName,
  backgroundColor = 'gray',
  jobCount,
  description,
  buttonText,
  buttonLink
}) => (
  <WithDescriptionCard
    className={className}
    backgroundColor={backgroundColor}
    logo={logo}
    companyName={companyName}
    headerContent={
      <div className={styles[`${companyCardPrefix}__title`]}>
        <h3 className={styles[`${companyCardPrefix}__name`]}>{companyName}</h3>
        <p className={styles[`${companyCardPrefix}__jobCount`]}>{jobCount}</p>
      </div>
    }
    mainContent={
      <div className={styles[`${companyCardPrefix}__content`]}>
        <p className={styles[`${companyCardPrefix}__description`]}>{description}</p>
      </div>
    }
    footerContent={
      <div className={styles[`${companyCardPrefix}__footer`]}>
        <SearchItem tag={buttonText} url={buttonLink} className={styles[`${companyCardPrefix}__footer-button`]} />
      </div>
    }
  />
)

export const CompanyCardWithoutDescription: React.FC<IWithoutDescriptionProps> = ({
  className,
  logo,
  companyName,
  backgroundColor = 'gray',
  vacantTitle,
  salary,
  buttonLink
}) => (
  <WithoutDescriptionCard
    className={className}
    backgroundColor={backgroundColor}
    logo={logo}
    companyName={companyName}
    buttonLink={buttonLink}
    headerContent={
      <div className={styles[`${companyCardPrefix}__withoutDesc-text`]}>
        <h3 className={styles[`${companyCardPrefix}__vacant-title`]}>{vacantTitle}</h3>
        <h4 className={styles[`${companyCardPrefix}__vacant-company`]}>{companyName}</h4>
        <p className={styles[`${companyCardPrefix}__vacant-companySalary`]}>{salary}</p>
      </div>
    }
  />
)

export const CompanyCard: React.FC<ICompanyCardProps> = (props) => {
  if (props.companyCardType === 'withDescription') {
    return <CompanyCardWithDescription {...(props as IWithDescriptionProps)} />
  } else {
    return <CompanyCardWithoutDescription {...(props as IWithoutDescriptionProps)} />
  }
}
