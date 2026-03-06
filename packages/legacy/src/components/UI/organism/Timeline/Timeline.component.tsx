import React from 'react'
import { ITimelineProps } from './Timeline.interface'
import style from './Timeline.module.scss'
import { classMUI } from '@constants/stories'
import { TimelineEvent, TimeLineItemStatus } from '../../molecules/TimelineEvent'

const Component: React.FC<ITimelineProps> = ({ steps, currentStep, onClick = () => ({}), isNotBlocked }) => {
  currentStep = Math.max(currentStep, 1)

  const getStatus = (index: number): TimeLineItemStatus => {
    if (index + 1 < currentStep) {
      return TimeLineItemStatus.CHECKED
    }
    if (index + 1 === currentStep) {
      return TimeLineItemStatus.CURRENT
    }
    if (isNotBlocked) {
      return TimeLineItemStatus.UNLOCKED
    }
    return TimeLineItemStatus.BLOCKED
  }

  return (
    <div className={style[`${classMUI}-timeline`]}>
      {steps.map(({ subtitle, title }, index) => (
        <TimelineEvent
          index={index + 1}
          onClick={onClick}
          key={index}
          title={title}
          subtitle={subtitle}
          status={getStatus(index)}
        />
      ))}
    </div>
  )
}

export const Timeline = Component
