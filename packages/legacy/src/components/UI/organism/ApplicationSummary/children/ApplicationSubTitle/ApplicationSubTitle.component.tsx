import React from 'react'
import { IApplicationSummary } from '../../ApplicationSummary.interface'
import styles from './ApplicationSubTitle.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)
const Component: React.FC<IApplicationSummary.SubTitle> = ({ children, className }) => {
  return <div className={cx('subtitle-summary', className)}>{children}</div>
}

export const ApplicationSubtitle = Component
