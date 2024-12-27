import React from 'react'
import styles from '../../AlertJobModal.module.scss'
import { IAlertJobModal } from '../../AlertJobModal.interface'
import { classNames } from '@shared/utils/common'
import { Urgent } from '@constants/icons.constants'

const cx = classNames.bind(styles)

export const AlertJobModalIcon: React.FC<IAlertJobModal.Icon> = ({ src, size = 50, alt, className }) => {
  const customWidth = size ? { width: size + 'px' } : {}
  return (
    <img
      style={customWidth}
      className={cx('alert-job__icon', className)}
      src={src ?? Urgent}
      alt={alt ?? `icon-item`}
      loading="lazy"
    />
  )
}
