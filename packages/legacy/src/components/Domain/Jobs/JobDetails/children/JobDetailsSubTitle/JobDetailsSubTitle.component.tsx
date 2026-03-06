import React from 'react'
import { classNames } from '@shared/utils/common'
import { IconItem, Typography } from '@components/UI/atoms'
import { IJobDetailsSubTitle } from './JobDetailsSubTitle.interface'
import { iconJobDetailsSubTitle } from '@constants/jobDetails.constants'
import styles from './JobDetailsSubTitle.module.scss'

const cx = classNames.bind(styles)

export const JobDetailsSubTitle: React.FC<IJobDetailsSubTitle> = ({ className, icon, children }) => (
  <Typography.Paragraph className={cx('title', className)}>
    {icon && <IconItem icon={iconJobDetailsSubTitle[icon]} size={16} alt={'subtitle-icon'} />}
    <Typography.Text strong>{children}</Typography.Text>
  </Typography.Paragraph>
)
