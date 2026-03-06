import React from 'react'
import { IJobCardLabelStatus } from './JobCardLabelStatus.interface'
import { IconItem } from '../../../../atoms/Icon/Icon.component'
import { JOB_CARD_LABEL_STATUS_COLOR } from './JobCardLabelStatus.constant'
import { Typography } from '../../../../atoms/Typography/Typography.component'
import style from './JobCardLabelStatus.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(style)
const JobCardLabelStatus: React.FC<IJobCardLabelStatus> = ({ status, text }) => {
  return (
    <div className={cx('magneto-ui-job-card-label-status', `magneto-ui-job-card-label-status--${status}`)}>
      <IconItem icon={JOB_CARD_LABEL_STATUS_COLOR[status]} alt="icon" size={16} />
      <Typography.Text weight="normal" size="sm-2" color="grey-800">
        {text}
      </Typography.Text>
    </div>
  )
}

export default JobCardLabelStatus
