import React from 'react'
import { classNames } from '@shared/utils/common'
import { AllJobs } from '@constants/icons.constants'
import { IconItem, Typography } from '@components/UI/atoms'
import { ISimilarJobsTitle } from './SimilarJobsTitle.interface'
import styles from './SimilarJobsTitle.module.scss'

const cx = classNames.bind(styles)

export const SimilarJobsTitle: React.FC<ISimilarJobsTitle> = ({ icon, children }) => {
  return (
    <Typography.Paragraph className={cx('title')}>
      {icon && <IconItem icon={AllJobs} size={16} alt={'all-jobs'} />}
      <Typography.Text strong>{children}</Typography.Text>
    </Typography.Paragraph>
  )
}
