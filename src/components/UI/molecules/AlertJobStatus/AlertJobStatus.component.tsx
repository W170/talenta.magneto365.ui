import React from 'react'
import styles from './AlertJobStatus.module.scss'
import { classNames } from '@shared/utils/common'
import { IAlertJobStatus } from './AlertJobStatus.interface'
import { Text } from '@components/UI/atoms/Text'
import { AlertJobStatusContainer } from './children/AlertJobStatusContainer'
import { AlertJobStatusIcon } from './children/AlertJobStatusIcon'
import { AlertJobStatusButton } from './children/AlertJobStatusButton'

const cx = classNames.bind(styles)

const Component: React.FC<IAlertJobStatus> = ({ children, className, type }) => {
  return <div className={cx('alert-job', className, type)}>{children}</div>
}

export const AlertJobStatus = Object.assign(Component, {
  Container: AlertJobStatusContainer,
  Icon: AlertJobStatusIcon,
  Button: AlertJobStatusButton,
  Text: Text
})
