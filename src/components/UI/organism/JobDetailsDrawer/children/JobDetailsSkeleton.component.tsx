import React, { Fragment } from 'react'
import { classMUI } from '@constants/stories.constants'
import style from './JobDetailsSkeleton.module.scss'

const Component = () => {
  const skeletonCard = (
    <div className={`${style[`${classMUI}-job-detail-skeleton__section`]} `}>
      <span className={style.skeleton} />
      <span className={style.skeleton} />
      <span className={style.skeleton} />
      <span className={style.skeleton} />
      <span className={style.skeleton} />
      <span />
    </div>
  )
  return (
    <div className={`${style[`${classMUI}-job-detail-skeleton`]}`}>
      <div className={`${style[`${classMUI}-job-detail-skeleton__header`]}`}>
        <div className={`${style[`${classMUI}-job-detail-skeleton__header_title`]}`} />
        <div className={`${style[`${classMUI}-job-detail-skeleton__header_btn`]}`}>
          <span className={style.skeleton} />
          <span className={style.skeleton} />
          <span className={style.skeleton} />
          <span className={style.skeleton} />
        </div>
        <div className={`${style[`${classMUI}-job-detail-skeleton__header_card`]}`} />
      </div>
      {Array(5)
        .fill(`JobDetailsSkeleton`)
        .map((name, i) => (
          <Fragment key={`${i}-name`}>{skeletonCard}</Fragment>
        ))}
    </div>
  )
}

/**
 * UI Children Skeleton Component for JobDetailsDrawer
 */

export const JobDetailsSkeleton = Component
