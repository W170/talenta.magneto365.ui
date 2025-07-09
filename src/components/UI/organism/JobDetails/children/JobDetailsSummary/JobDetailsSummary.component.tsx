import React from 'react'
import { classNames } from '@shared/utils/common'
import { Typography } from '@components/UI/atoms'
import { iconJobDetailSummaryMap } from '@constants/jobDetails.constants'
import { IJobDetailsSummary } from './JobDetailsSummary.interface'
import styles from './JobDetailsSummary.module.scss'

const cx = classNames.bind(styles)

export const JobDetailsSummary: React.FC<IJobDetailsSummary> = ({ children, items, className, classNames }) => (
  <ul className={cx('summary', className)}>
    {children}
    {items.map(({ id, icon, label }) => (
      <li className={cx('summary__item', classNames?.item)} key={id}>
        {React.cloneElement(iconJobDetailSummaryMap[icon], { className: classNames?.icon })}
        <Typography.Text className={cx('summary__label', classNames?.label)}>{label}</Typography.Text>
      </li>
    ))}
  </ul>
)
