import React, { useMemo } from 'react'
import { TimelineEventProps, TimeLineItemStatus } from './TimelineEvent.interface'
import { Checked, Clock, Lock } from '@constants/icons.constants'
import style from './TimelineEvent.module.scss'
import { classMUI } from '@constants/stories'
import { IconItem } from '@components/UI/atoms'
import { classNames } from '@shared/utils/common'

const timelineIcons = {
  checked: Checked,
  current: Clock,
  unlocked: Clock,
  blocked: Lock
}

const cx = classNames.bind(style)

const Component: React.FC<TimelineEventProps> = ({ title, subtitle, status, index = 0, onClick = () => ({}) }) => {
  const iconByType = useMemo(() => timelineIcons[status], [status])
  const className = `${classMUI}-timeline-event`
  const titleStyle = `${className}__text--title-${status}`
  const subtitleStyle = `${className}__text--subtitle-${status}`

  return (
    <button type="button" onClick={() => onClick(status, index)} className={style[`${classMUI}-timeline-event`]}>
      <div className={cx(`${className}__icon`)}>
        <div className={cx(`${className}__icon--bar`, `${status}`)}></div>
        <IconItem
          className={cx(`${className}__icon--icon`, {
            unlocked: status === TimeLineItemStatus.UNLOCKED
          })}
          icon={iconByType}
          alt={status}
        />
      </div>
      <div className={cx(`${className}__text`)}>
        <p className={cx(`${className}__text--title`, `${titleStyle}`)}>{title}</p>
        <p className={cx(`${className}__text--subtitle`, `${subtitleStyle}`)}>{subtitle}</p>
      </div>
    </button>
  )
}

export const TimelineEvent = Component
