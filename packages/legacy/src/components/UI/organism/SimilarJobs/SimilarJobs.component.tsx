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
  //TODO:PLS REMOVE THIS BOOLEAN WHEN THE SIMILAR VACANCIES PAGE EXIST
  const pageExists = false

  if (similarJobsCard.length <= 0) return null

  return (
    <div className={`${styles[`${classMUI}-similar-jobs-section`]}`}>
      <p className={`${styles[`${classMUI}-similar-jobs-section__title`]}`}>{`${sectionTitle}:`}</p>
      {similarJobsCard.map(({ id, ...props }) => (
        <SimilarJobsCard key={id} hideLogo={hideLogo} {...props} />
      ))}
      {pageExists && (
        <a className={`${styles[`${classMUI}-similar-jobs-section__link`]}`} title={moreJobsText} href={moreJobsLink}>
          {moreJobsText}
        </a>
      )}
    </div>
  )
}

export default SimilarJobs
