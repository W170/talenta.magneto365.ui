import React from 'react'
import { IProcessesCard, IStatusJob } from '../../ProcessesCard.interface'
import { ClockLine, DocumentForward, DocumentSearch, People, UserRemove, UserTick } from '@constants/icons.constants'
import { classNames } from '@shared/utils/common'
import styles from '../../ProcessesCard.module.scss'
const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard.IStatusIcon> = ({ status, ...props }) => {
  const iconByStatus = (status: IStatusJob) => {
    const icons: Record<IStatusJob, string> = {
      Discarded: UserRemove,
      Finalists: People,
      Hired: UserTick,
      Pending: ClockLine,
      Sent: DocumentForward,
      Validation: DocumentSearch,
      Canceled: UserRemove
    }
    return icons[status]
  }

  return <img className={cx('processes-card__icon-status')} src={iconByStatus(status)} alt="icons-status" {...props} />
}

export const ProcessesCardIconStatus = Component
