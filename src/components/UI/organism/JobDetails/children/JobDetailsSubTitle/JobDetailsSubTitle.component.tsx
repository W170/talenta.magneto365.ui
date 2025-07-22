import React from 'react'
import { classNames } from '@shared/utils/common'
import { IconItem, Typography } from '@components/UI/atoms'
import { IJobDetailsSubTitle } from './JobDetailsSubTitle.interface'

const cx = classNames.bind({})

export const JobDetailsSubTitle: React.FC<IJobDetailsSubTitle> = ({ className, icon, children }) => (
  <Typography.Paragraph className={cx('title', className)}>
    {icon && <IconItem icon={icon} size={16} alt={'all-jobs'} />}
    <Typography.Text strong>{children}</Typography.Text>
  </Typography.Paragraph>
)
