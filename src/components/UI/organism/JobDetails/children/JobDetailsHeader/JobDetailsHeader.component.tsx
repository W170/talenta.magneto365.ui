import React from 'react'
import { classNames } from '@shared/utils/common'
import { Typography } from '@components/UI/atoms'
import { IJobDetailsHeader } from './JobDetailsHeader.interface'
import styles from './JobDetailsHeader.module.scss'

const cx = classNames.bind(styles)

export const JobDetailsHeader: React.FC<IJobDetailsHeader> = ({
  title,
  className,
  classNames = {},
  publishedDate,
  children
}) => {
  return (
    <section className={cx('header', className)}>
      <Typography.Text className={cx('header__publish-date', classNames.publishDate)}>{publishedDate}</Typography.Text>
      <Typography.Paragraph className={cx('header__title', classNames.title)}>{title}</Typography.Paragraph>
      <section className={classNames.info}>{children}</section>
    </section>
  )
}
