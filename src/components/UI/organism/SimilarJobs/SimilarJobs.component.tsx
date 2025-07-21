import React from 'react'
import { ISimilarJobs } from './SimilarJobs.interface'
import { classMUI } from '@constants/stories'
import { SimilarJobsCard } from '@components/UI/molecules/SimilarJobsCard'
import styles from './SimilarJobs.module.scss'

const SimilarJobs: React.FC<ISimilarJobs> = ({ hideLogo, similarJobsCard }) => {
  if (similarJobsCard.length <= 0) return null

  return (
    <div className={`${styles[`${classMUI}-similar-jobs-section`]}`}>
      {similarJobsCard.map(({ id, ...props }) => (
        <SimilarJobsCard key={id} hideLogo={hideLogo} {...props} />
      ))}
    </div>
  )
}

export default SimilarJobs
