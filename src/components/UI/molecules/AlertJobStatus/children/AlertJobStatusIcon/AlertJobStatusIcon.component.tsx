import React, { useMemo } from 'react'
import styles from './AlertJobStatusIcon.module.scss'
import { IAlertJobStatus } from '../../AlertJobStatus.interface'
import { classNames } from '@shared/utils/common'
import { Checked2, Error3D, Warning3D } from '@constants/icons.constants'

const cx = classNames.bind(styles)

const alertIcons = {
  success: Checked2,
  warning: Warning3D,
  error: Error3D
}

export const AlertJobStatusIcon: React.FC<IAlertJobStatus.Icon> = ({
  src,
  size = 34,
  alt,
  className,
  type = 'warning'
}) => {
  const customWidth = size ? { width: size + 'px' } : {}
  const iconByType = useMemo(() => alertIcons[type], [type])
  return (
    <img
      style={customWidth}
      className={cx('alert-job__icon', className)}
      src={src ?? iconByType}
      alt={alt ?? `icon-item`}
      loading="lazy"
    />
  )
}
