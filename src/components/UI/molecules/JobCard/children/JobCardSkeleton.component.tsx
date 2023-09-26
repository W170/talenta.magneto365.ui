import React from 'react'
import style from './JobCardSkeleton.module.scss'
import { classMUI } from '@constants/stories'

const JobCardSkeleton = () => {
  return (
    <div className={`${style[`${classMUI}-job-card-skeleton`]}`}>
      <div className={`${style[`${classMUI}-job-card-skeleton__row1`]} ${style.skeleton}`} />
      <div className={`${style[`${classMUI}-job-card-skeleton__container`]}`}>
        <div className={`${style[`${classMUI}-job-card-skeleton__container--row2`]} ${style.skeleton}`} />
        <div className={`${style[`${classMUI}-job-card-skeleton__container--row2`]} ${style.skeleton}`} />
        <div className={`${style[`${classMUI}-job-card-skeleton__container--row2`]} ${style.skeleton}`} />
        <div className={`${style[`${classMUI}-job-card-skeleton__container--row2`]} ${style.skeleton}`} />
      </div>
    </div>
  )
}

export default JobCardSkeleton
