import React from 'react'
import { IJobDetailsActions } from './JobDetailsActions.interface'
import styles from './JobDetailsActions.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

export const JobDetailsActions: React.FC<IJobDetailsActions> = ({ children, className }) => {
  return <section className={cx('actions', className)}>{children}</section>
}
