import React, { useMemo } from 'react'
import { TimelineEventProps } from './TimelineEvent.interface'
import style from './TimelineEvent.module.scss'
import { IconItem } from '@components/UI/atoms'
import { classNames } from '@shared/utils/common'
import { BASE_CLASS, TIMELINE_ICONS } from '@constants/timelineEvent.constants'

const cx = classNames.bind(style)

const Component: React.FC<TimelineEventProps> = ({ title, subtitle, status, index = 0, onClick = () => ({}) }) => {
  const iconByType = useMemo(() => TIMELINE_ICONS[status], [status])

  return (
    <button type="button" onClick={() => onClick(status, index)} className={style[BASE_CLASS]}>
      <div className={cx(`${BASE_CLASS}__icon`)}>
        <div className={cx(`${BASE_CLASS}__icon-bar`, `${BASE_CLASS}__icon-bar--${status}`)} />
        <IconItem
          className={cx(`${BASE_CLASS}__icon-icon`, `${BASE_CLASS}__icon-icon--${status}`)}
          icon={iconByType}
          alt={status}
        />
      </div>
      <div className={cx(`${BASE_CLASS}__text`)}>
        <p className={cx(`${BASE_CLASS}__text-title`, `${BASE_CLASS}__text-title--${status}`)}>{title}</p>
        <p className={cx(`${BASE_CLASS}__text-subtitle`, `${BASE_CLASS}__text-subtitle--${status}`)}>{subtitle}</p>
      </div>
    </button>
  )
}

export const TimelineEvent = Component
