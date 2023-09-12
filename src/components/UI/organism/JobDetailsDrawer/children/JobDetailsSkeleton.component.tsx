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
      {Array(5)
        .fill('')
        .map((i) => (
          <Fragment key={i}>{skeletonCard}</Fragment>
        ))}
    </div>
  )
}

/**
 * UI Children Skeleton Component for JobDetailsDrawer
 */

export const JobDetailsSkeleton = Component
