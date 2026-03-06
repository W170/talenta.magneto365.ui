import React from 'react'
import styles from '../../AlertJobModal.module.scss'
import { classNames } from '@shared/utils/common'
import { IAlertJobModal } from '../../AlertJobModal.interface'

const cx = classNames.bind(styles)

export const AlertJobModalTitle: React.FC<IAlertJobModal.Title> = ({ title, subtitle, className, children }) => {
  return (
    <div className={cx('alert-modal__title', className)}>
      <p>{subtitle}</p>
      <p>{`“${title}”`}</p>
      {children}
    </div>
  )
}
