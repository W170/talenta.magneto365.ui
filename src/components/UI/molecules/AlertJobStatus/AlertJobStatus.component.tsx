import React from 'react'
import styles from './AlertJobStatus.module.scss'
import { classNames } from '@shared/utils/common'
import { AlertJobStatusContainer } from './children/AlertJobStatusContainer'
import { IAlertJobStatus } from './AlertJobStatus.interface'
import { Text } from '@components/UI/atoms/Text'

const cx = classNames.bind(styles)

const Component: React.FC<IAlertJobStatus> = ({ children, className }) => {
  return <div className={cx('alert-job', className)}>{children}</div>
}

export const AlertJobStatus = Object.assign(Component, {
  Container: AlertJobStatusContainer,
  Text: Text
})
