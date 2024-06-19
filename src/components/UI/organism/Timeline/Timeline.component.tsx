import React from 'react'
import { ITimelineProps } from './Timeline.interface'
import style from './Timeline.module.scss'
import { classMUI } from '@constants/stories'
import { TimelineEvent, TimelineEventStatus } from '../../molecules/TimelineEvent'

const STATUS: { [key: string]: TimelineEventStatus } = {
  CHECKED: 'checked',
  CURRENT: 'current',
  BLOCKED: 'blocked'
}

const Component: React.FC<ITimelineProps> = ({ steps, currentStep }) => {
  currentStep = Math.max(currentStep, 1)

  const getStatus = (index: number): TimelineEventStatus => {
    if (index + 1 < currentStep) {
      return STATUS.CHECKED
    }
    if (index + 1 === currentStep) {
      return STATUS.CURRENT
    }
    return STATUS.BLOCKED
  }

  return (
    <div className={style[`${classMUI}-timeline`]}>
      {steps.map(({ subtitle, title }, index) => (
        <TimelineEvent key={index} title={title} subtitle={subtitle} status={getStatus(index)} />
      ))}
    </div>
  )
}

export const Timeline = Component
