import React from 'react'
import { IApplicationSummary } from '../../ApplicationSummary.interface'
import styles from './ApplicationButton.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)
const Component: React.FC<IApplicationSummary.Button> = ({ className, children, variant = 'primary' }) => {
  return <button className={cx('button-summary', variant, className)}>{children}</button>
}

export const ApplicationButton = Component
