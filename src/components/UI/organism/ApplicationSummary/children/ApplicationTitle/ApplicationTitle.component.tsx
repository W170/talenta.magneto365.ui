import React from 'react'
import { IApplicationSummary } from '../../ApplicationSummary.interface'
import styles from './ApplicationTitle.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)
const Component: React.FC<IApplicationSummary.Title> = ({ children, className }) => {
  return <div className={cx('title-summary', className)}>{children}</div>
}

export const ApplicationTitle = Component
