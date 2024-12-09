import React from 'react'
import styles from './AlertJobStatusIcon.module.scss'
import { IAlertJobStatus } from '../../AlertJobStatus.interface'
import { classNames } from '@shared/utils/common'
import { Warning3D } from '@constants/icons.constants'

const cx = classNames.bind(styles)

export const AlertJobStatusIcon: React.FC<IAlertJobStatus.Icon> = ({ src, size = 34, alt, className }) => {
  const customWidth = size ? { width: size + 'px' } : {}
  return (
    <img
      style={customWidth}
      className={cx('alert-job__icon', className)}
      src={src ?? Warning3D}
      alt={alt ?? `icon-item`}
      loading="lazy"
    />
  )
}
