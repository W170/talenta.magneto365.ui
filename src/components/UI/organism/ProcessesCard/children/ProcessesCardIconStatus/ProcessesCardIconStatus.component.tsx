import React from 'react'
import { IProcessesCard, IStatusJob } from '../../ProcessesCard.interface'
import {
  ClockLineBlack,
  DocumentForwardBlack,
  DocumentSearchBlack,
  PeopleBlack,
  UserRemoveBlack,
  UserTickBlack
} from '@constants/icons.constants'
import { classNames } from '@shared/utils/common'
import styles from '../../ProcessesCard.module.scss'
const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard.IStatusIcon> = ({ status, ...props }) => {
  const iconByStatus = (status: IStatusJob) => {
    const icons: Record<IStatusJob, string> = {
      Discarded: UserRemoveBlack,
      Finalists: PeopleBlack,
      Hired: UserTickBlack,
      Pending: ClockLineBlack,
      Sent: DocumentForwardBlack,
      Validation: DocumentSearchBlack,
      Canceled: UserRemoveBlack
    }
    return icons[status]
  }

  return (
    <img
      className={cx('processes-card__icon-status', `processes-color-icon--${status}`)}
      src={iconByStatus(status)}
      alt="icons-status"
      {...props}
    />
  )
}

export const ProcessesCardIconStatus = Component
