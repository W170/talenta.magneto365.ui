import React from 'react'
import { classNames } from '@shared/utils/common'
import { IconItem, Typography } from '@components/UI/atoms'
import { IJobDetailsHeader } from './JobDetailsHeader.interface'
import styles from './JobDetailsHeader.module.scss'

const cx = classNames.bind(styles)

export const JobDetailsHeader: React.FC<IJobDetailsHeader> = ({
  title,
  companyIcon,
  className,
  publishedDate,
  renderBottom
}) => {
  return (
    <header className={cx('header', className)}>
      <IconItem className={cx('header__icon')} size={78} icon={companyIcon} />
      <section className={cx('header__info')}>
        <Typography.Paragraph>{publishedDate}</Typography.Paragraph>
        <Typography.Paragraph className={cx('header__title')}>{title}</Typography.Paragraph>
        {renderBottom?.()}
      </section>
    </header>
  )
}
