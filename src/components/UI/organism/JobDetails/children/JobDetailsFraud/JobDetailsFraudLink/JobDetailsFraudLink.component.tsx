import React from 'react'
import { classNames } from '@shared/utils/common'
import { WarningHex } from '@constants/icons.constants'
import { IconItem, Typography } from '@components/UI/atoms'
import { IJobDetailsFraudLink } from './JobDetailsFraudLink.interface'
import styles from './JobDetailsFraudLink.module.scss'

const cx = classNames.bind(styles)

export const JobDetailsFraudLink: React.FC<IJobDetailsFraudLink> = ({ children, className, ...rest }) => (
  <Typography.Link strong target="_blank" rel="" className={cx('fraud-link', className)} {...rest}>
    <IconItem icon={WarningHex} size={16} alt="warning" />
    {children}
  </Typography.Link>
)
