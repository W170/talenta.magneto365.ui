import React, { Fragment } from 'react'
import style from './MobileJobDetailsDrawerSkeleton.module.scss'

const Component = () => {
  const skeletonCard = (
    <div className={style['magneto-ui-mobile-job-detail-skeleton__section']}>
      <span className={style.skeleton} />
      <span className={style.skeleton} />
      <span className={style.skeleton} />
      <span className={style.skeleton} />
      <span className={style.skeleton} />
      <span />
    </div>
  )

  return (
    <div className={style['magneto-ui-mobile-job-detail-skeleton']}>
      <div className={style['magneto-ui-mobile-job-detail-skeleton__header']}>
        <div className={style['magneto-ui-mobile-job-detail-skeleton__header_title']} />
        <div className={style['magneto-ui-mobile-job-detail-skeleton__header_btn']}></div>
        <div className={style['magneto-ui-mobile-job-detail-skeleton__header_card']} />
      </div>
      {Array(2)
        .fill(`JobDetailsSkeleton`)
        .map((name, i) => (
          <Fragment key={`${i}-name`}>{skeletonCard}</Fragment>
        ))}
      <div className={style['magneto-ui-mobile-job-detail-skeleton__footer']}>
        <div className={style['magneto-ui-mobile-job-detail-skeleton__footer_title']}></div>
        <div className={style['magneto-ui-mobile-job-detail-skeleton__footer_info']}></div>
        <div className={style['magneto-ui-mobile-job-detail-skeleton__footer_button']}></div>
      </div>
    </div>
  )
}

/**
 * UI Children Skeleton Component for MobileJobDetailsDrawer
 */

export const MobileJobDetailsDrawerSkeleton = Component
