import React from 'react'
import { IApplicationSummary } from '../../ApplicationSummary.interface'
import styles from './ApplicationSection.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)
const Component: React.FC<IApplicationSummary.Section> = ({ aligned = 'start', className, children }) => {
  return <div className={cx('section-summary', aligned, className)}>{children}</div>
}

export const ApplicationSection = Component
