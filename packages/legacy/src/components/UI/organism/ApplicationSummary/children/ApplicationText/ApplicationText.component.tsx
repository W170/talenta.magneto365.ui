import React from 'react'
import { IApplicationSummary } from '../../ApplicationSummary.interface'
import styles from './ApplicationText.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)
const Component: React.FC<IApplicationSummary.Text> = ({ children, className }) => {
  return <p className={cx('text-summary', className)}>{children}</p>
}

export const ApplicationText = Component
