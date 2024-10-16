import React, { useMemo } from 'react'
import { TimelineEventProps } from './TimelineEvent.interface'
import { Checked, Clock, Lock } from '@constants/icons.constants'
import style from './TimelineEvent.module.scss'
import { classMUI } from '@constants/stories'
import { IconItem } from '@components/UI/atoms'

const timelineIcons = {
  checked: Checked,
  current: Clock,
  blocked: Lock
}

const Component: React.FC<TimelineEventProps> = ({ title, subtitle, status, index = 0, onClick = () => ({}) }) => {
  const iconByType = useMemo(() => timelineIcons[status], [status])
  const titleStyle = style[`${classMUI}-timeline-event__text--title-${status}`]
  const subtitleStyle = style[`${classMUI}-timeline-event__text--subtitle-${status}`]

  return (
    <button type="button" onClick={() => onClick(status, index)} className={style[`${classMUI}-timeline-event`]}>
      <div className={style[`${classMUI}-timeline-event__icon`]}>
        <div className={`${style[`${classMUI}-timeline-event__icon--bar`]} ${style[status]}`}></div>
        <IconItem className={style[`${classMUI}-timeline-event__icon--icon`]} icon={iconByType} alt={status} />
      </div>
      <div className={style[`${classMUI}-timeline-event__text`]}>
        <p className={`${style[`${classMUI}-timeline-event__text--title`]} ${titleStyle}`}>{title}</p>
        <p className={`${style[`${classMUI}-timeline-event__text--subtitle`]} ${subtitleStyle}`}>{subtitle}</p>
      </div>
    </button>
  )
}

export const TimelineEvent = Component
