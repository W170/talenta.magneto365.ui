import React from 'react'
import { classNames } from '@shared/utils/common'
import { IJobDetails } from './JobDetails.interface'
import styles from './jobDetails.module.scss'

const cx = classNames.bind(styles)

export const JobDetails: React.FC<IJobDetails> = ({ renderHeader, children, renderFooter, classNames }) => {
  return (
    <article className={cx('job')}>
      <header className={cx('job__header', classNames?.header)}>{renderHeader()}</header>
      <section className={cx('job__body', classNames?.body)}>{children}</section>
      <footer className={cx('job__footer', classNames?.footer)}>{renderFooter?.()}</footer>
    </article>
  )
}
