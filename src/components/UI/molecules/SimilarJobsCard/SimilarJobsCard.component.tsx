import React, { useMemo } from 'react'
import { ISimilarJobsCard } from './SimilarJobsCard.interface'
import { ArrowRight2, NoLogo } from '@constants/icons.constants'
import { classMUI } from '@constants/stories'
import { IconItem } from '@components/UI/atoms'
import styles from './SimilarJobsCard.module.scss'

const SimilarJobsCard: React.FC<ISimilarJobsCard> = ({
  cities,
  companyLogo,
  experience,
  jobUrlSlug,
  salary,
  title,
  companyName,
  hideLogo
}) => {
  const formatInfo = useMemo(() => {
    const citiesFormat = cities ? `${cities[0]} ${cities.length > 1 ? `(+${cities.length - 1})` : ''} | ` : ''
    const salaryFormat = salary ? `${salary} | ` : ''
    const experienceFormat = experience ? `${experience}` : ''

    return `${citiesFormat}${salaryFormat}${experienceFormat}`
  }, [cities, salary, experience])

  return (
    <a title={title} className={`${styles[`${classMUI}-similar-jobs`]}`} href={jobUrlSlug}>
      {!hideLogo && (
        <img
          className={`${styles[`${classMUI}-similar-jobs__img`]}`}
          src={companyLogo ? companyLogo : NoLogo}
          alt={`${companyName}-logo`.toLowerCase()}
        />
      )}
      <div>
        <p className={`${styles[`${classMUI}-similar-jobs__title`]}`}>{title}</p>
        <p className={`${styles[`${classMUI}-similar-jobs__info`]}`}>{formatInfo}</p>
      </div>
      <IconItem className={`${styles[`${classMUI}-similar-jobs__arrow`]}`} icon={ArrowRight2} alt="arow-right-icon" />
    </a>
  )
}

export default SimilarJobsCard
