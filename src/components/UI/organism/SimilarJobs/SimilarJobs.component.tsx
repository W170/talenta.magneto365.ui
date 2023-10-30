import React from 'react'
import { ISimilarJobs } from './SimilarJobs.interface'
import { classMUI } from '@constants/stories'
import { SimilarJobsCard } from '@components/UI/molecules/SimilarJobsCard'
import styles from './SimilarJobs.module.scss'

const SimilarJobs: React.FC<ISimilarJobs> = ({
  sectionTitle,
  moreJobsText,
  moreJobsLink,
  hideLogo,
  similarJobsCard
}) => {
  return (
    <div className={`${styles[`${classMUI}-similar-jobs-section`]}`}>
      <h3 className={`${styles[`${classMUI}-similar-jobs-section__title`]}`}>{`${sectionTitle}:`}</h3>
      {similarJobsCard.map(({ id, ...props }) => (
        <SimilarJobsCard key={id} hideLogo={hideLogo} {...props} />
      ))}
      <a className={`${styles[`${classMUI}-similar-jobs-section__link`]}`} title={moreJobsText} href={moreJobsLink}>
        {moreJobsText}
      </a>
    </div>
  )
}

export default SimilarJobs
