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
      <IconItem className="header__icon" size={100} icon={companyIcon} />
      <section className={cx('header__info')}>
        <Typography.Paragraph>{title}</Typography.Paragraph>
        {companyLink ? (
          <Typography.Link title={company} href={companyLink}>
            {company}
          </Typography.Link>
        ) : (
          <Typography.Title level={2}>{company}</Typography.Title>
        )}
      </section>
    </header>
  )
}
