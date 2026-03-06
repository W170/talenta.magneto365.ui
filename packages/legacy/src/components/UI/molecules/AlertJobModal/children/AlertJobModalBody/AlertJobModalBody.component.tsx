import React from 'react'
import styles from '../../AlertJobModal.module.scss'
import { classNames } from '@shared/utils/common'
import { IAlertJobModal } from '../../AlertJobModal.interface'

const cx = classNames.bind(styles)

export const AlertJobModalBody: React.FC<IAlertJobModal.Body> = ({ className, children }) => {
  return <div className={cx('alert-modal__body', className)}>{children}</div>
}
