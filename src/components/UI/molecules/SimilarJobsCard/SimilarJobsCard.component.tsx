import React from 'react'
import { classMUI } from '@constants/stories'
import { NoLogo } from '@constants/icons.constants'
import { IconItem, Typography } from '@components/UI/atoms'
import { ISimilarJobsCard } from './SimilarJobsCard.interface'
import styles from './SimilarJobsCard.module.scss'

const SimilarJobsCard: React.FC<ISimilarJobsCard> = ({
  cities,
  companyLogo,
  jobUrlSlug,
  salary,
  title,
  quotas,
  companyName,
  contractType,
  hideLogo
}) => {
  const [city = '', ...restCities] = cities

  return (
    <a title={title} className={`${styles[`${classMUI}-similar-jobs`]}`} href={jobUrlSlug}>
      {!hideLogo && (
        <IconItem
          className={`${styles[`${classMUI}-similar-jobs__img`]}`}
          icon={companyLogo ? companyLogo : NoLogo}
          alt={`${companyName ? companyName : 'company'}-logo`.toLowerCase()}
          size={56}
        />
      )}
      <div>
        <Typography.Title level={2} strong className={`${styles[`${classMUI}-similar-jobs__title`]}`}>
          {title}
        </Typography.Title>
        <Typography.Paragraph className={`${styles[`${classMUI}-similar-jobs__info`]}`}>
          {[[companyName, contractType].filter(Boolean).join(' | '), quotas].filter(Boolean).join(', ')}
        </Typography.Paragraph>
        <Typography.Paragraph className={`${styles[`${classMUI}-similar-jobs__info`]}`}>{salary}</Typography.Paragraph>
        <Typography.Paragraph className={`${styles[`${classMUI}-similar-jobs__info`]}`}>
          {[city, restCities.length && `(+${restCities.length})`].filter(Boolean).join(' ')}
        </Typography.Paragraph>
      </div>
    </a>
  )
}

export default SimilarJobsCard
