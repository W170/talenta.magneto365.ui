import React, { useMemo } from 'react'
import { getCandidateOverviewComponent } from './CandidateOverview.constants'
import styles from './CandidateOverview.module.scss'
import { classNames } from '@shared/utils/common'
import {
  ICandidateOverviewProps,
  ECandidateOverviewSeparation,
  ECandidateOverviewData
} from './CandidateOverview.interface'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateOverviewProps> = ({ data, separation }) => {
  const components = useMemo(
    () =>
      data?.map(({ children, type }) => {
        if ((type as ECandidateOverviewData) === ECandidateOverviewData.CUSTOM) return children

        const ChildComponent = getCandidateOverviewComponent(type)

        return (children as unknown[])?.map((child, index) => {
          return <ChildComponent key={index} {...child} />
        })
      }),
    [data]
  )

  return (
    <div className={cx('magneto-ui-candidate-overview')}>
      <div
        className={cx(
          'magneto-ui-candidate-overview__container',
          `magneto-ui-candidate-overview__separation--${ECandidateOverviewSeparation.XL || separation}`
        )}
      >
        {components}
      </div>
    </div>
  )
}

/**
 * Molecule UI component of candidate overview
 */
export const CandidateOverview = Component
