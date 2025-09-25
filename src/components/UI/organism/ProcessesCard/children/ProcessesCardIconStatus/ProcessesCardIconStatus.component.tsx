import React from 'react'
import { IProcessesCard, IStatusJob } from '../../ProcessesCard.interface'
import { classNames } from '@shared/utils/common'
import styles from '../../ProcessesCard.module.scss'
import ClockLineIcon from '../IconsStatus/ClockLineIcon.component'
import UserRemoveIcon from '../IconsStatus/UserRemoveIcon.component'
import UserTickIcon from '../IconsStatus/UserTickIcon.component'
import PeopleIcon from '../IconsStatus/PeopleIcon.component'
import DocumentForward from '../IconsStatus/DocumentForwardIcon.component'
import DocumentSearch from '../IconsStatus/DocumentSearchIcon.component'
const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard.IStatusIcon> = ({ status, color, ...props }) => {
  const iconByStatus = (status: IStatusJob) => {
    const icons: Record<IStatusJob, React.ReactNode> = {
      Discarded: <UserRemoveIcon fill={color} />,
      Finalists: <PeopleIcon fill={color} />,
      Hired: <UserTickIcon fill={color} />,
      Pending: <ClockLineIcon fill={color} />,
      Sent: <DocumentForward fill={color} />,
      Validation: <DocumentSearch fill={color} />,
      Canceled: <UserRemoveIcon fill={color} />
    }
    return icons[status]
  }

  return (
    <span className={cx('processes-card__icon-status')} {...props}>
      {iconByStatus(status)}
    </span>
  )
}

export const ProcessesCardIconStatus = Component
