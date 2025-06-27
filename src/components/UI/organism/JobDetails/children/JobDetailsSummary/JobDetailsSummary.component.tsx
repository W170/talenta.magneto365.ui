import React from 'react'
import { classNames } from '@shared/utils/common'
import styles from './JobDetailsSummary.module.scss'
import { IJobDetailsSummary } from './JobDetailsSummary.interface'

const cx = classNames.bind(styles)

export const JobDetailsSummary: React.FC<IJobDetailsSummary> = ({ children }) => (
  <section className={cx('summary')}>{children}</section>
)
