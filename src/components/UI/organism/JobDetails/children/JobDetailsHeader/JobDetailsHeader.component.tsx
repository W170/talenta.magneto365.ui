import React from 'react'
import { classNames } from '@shared/utils/common'
import { IconItem, Typography } from '@components/UI/atoms'
import { IJobDetailsHeader } from './JobDetailsHeader.interface'
import styles from './JobDetailsHeader.module.scss'

const cx = classNames.bind(styles)

export const JobDetailsHeader: React.FC<IJobDetailsHeader> = ({
  title,
  company,
  companyLink,
  companyIcon,
  className
}) => {
  return (
    <header className={cx('header', className)}>
      <IconItem className={cx('header__icon')} size={78} icon={companyIcon} />
      <section className={cx('header__info')}>
        <Typography.Paragraph className={cx('header__title')}>{title}</Typography.Paragraph>
        {companyLink ? (
          <Typography.Link className={cx('header__company')} title={company} href={companyLink}>
            {company}
          </Typography.Link>
        ) : (
          <Typography.Title className={cx('header__company')} level={2}>
            {company}
          </Typography.Title>
        )}
      </section>
    </header>
  )
}
