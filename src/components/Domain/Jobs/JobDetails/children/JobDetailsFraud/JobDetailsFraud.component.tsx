import React from 'react'
import { IJobDetailsFraud } from './JobDetailsFraud.interface'
import { IconItem, Typography } from '@components/UI/atoms'
import { Warning3D } from '@constants/icons.constants'
import { classNames } from '@shared/utils/common'
import styles from './JobDetailsFraud.module.scss'

const cx = classNames.bind(styles)

export const JobDetailsFraud: React.FC<IJobDetailsFraud> = ({ children, renderTitle, className }) => {
  return (
    <section role="alert" aria-live="assertive" className={cx('fraud', className)} data-testid="job-details-fraud">
      <header className={cx('fraud__header')}>
        <IconItem icon={Warning3D} alt="warning" />
        <Typography.Title level={2}>{renderTitle?.()}</Typography.Title>
      </header>
      <section>{children}</section>
    </section>
  )
}
