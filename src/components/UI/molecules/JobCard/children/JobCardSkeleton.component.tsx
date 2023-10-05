import React from 'react'
import style from './JobCardSkeleton.module.scss'
import { classMUI } from '@constants/stories'
import { IJobCardSkeleton } from './JobCardSkeleton.interface'

const JobCardSkeleton: React.FC<IJobCardSkeleton> = ({ numCard }) => {
  const skeletonNum = Array.from({ length: numCard }, (_, index) => index + 1)

  return (
    <>
      {skeletonNum.map((ele, i) => (
        <div key={ele + i} className={`${style[`${classMUI}-job-card-skeleton`]}`}>
          <div className={`${style[`${classMUI}-job-card-skeleton__row1`]} ${style.skeleton}`} />
          <div className={`${style[`${classMUI}-job-card-skeleton__container`]}`}>
            <div className={`${style[`${classMUI}-job-card-skeleton__container--row2`]} ${style.skeleton}`} />
            <div className={`${style[`${classMUI}-job-card-skeleton__container--row2`]} ${style.skeleton}`} />
            <div className={`${style[`${classMUI}-job-card-skeleton__container--row2`]} ${style.skeleton}`} />
            <div className={`${style[`${classMUI}-job-card-skeleton__container--row2`]} ${style.skeleton}`} />
          </div>
        </div>
      ))}
    </>
  )
}

export default JobCardSkeleton
