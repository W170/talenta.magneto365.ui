import React from 'react'
import styles from './AlertJobStatusContainer.module.scss'
import { IAlertJobStatus } from '../../AlertJobStatus.interface'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

export const AlertJobStatusContainer: React.FC<IAlertJobStatus.Container> = ({ className, children }) => {
  return <div className={cx('alert-job__content', className)}>{children}</div>
}
