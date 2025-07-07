import React from 'react'
import { classNames } from '@shared/utils/common'
import { IconItem, Typography } from '@components/UI/atoms'
import Star from '@assets/Star-yellow.svg'

import styles from './JobDetailsSuggested.module.scss'
import { IJobDetailsSuggested } from './JobDetailsSuggested.interface'

const cx = classNames.bind(styles)

export const JobDetailsSuggested: React.FC<IJobDetailsSuggested> = ({
  title,
  classNames,
  tag,
  children,
  behavior = 'showcase'
}) => {
  return children ? (
    <section className={cx(`suggested-jobs-container`, { tab__container: behavior === 'tab' }, classNames?.container)}>
      <div className={cx('suggested-jobs-container__header', classNames?.header)}>
        <Typography.Title>{title}</Typography.Title>
        {tag && (
          <div className={cx('suggested-jobs-container__tag', classNames?.tag)}>
            <IconItem icon={Star} size={18} />
            {tag}
          </div>
        )}
      </div>
      <div className={cx('suggested-jobs-container__body', { tab__body: behavior === 'tab' }, classNames?.body)}>
        {children}
      </div>
    </section>
  ) : null
}
