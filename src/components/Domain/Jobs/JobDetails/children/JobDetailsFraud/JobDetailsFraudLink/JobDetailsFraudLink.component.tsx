import React from 'react'
import { classNames } from '@shared/utils/common'
import { WarningHex } from '@constants/icons.constants'
import { IconItem, Typography, ITypographyLink } from '@components/UI/atoms'
import styles from './JobDetailsFraudLink.module.scss'

const cx = classNames.bind(styles)

export const JobDetailsFraudLink: React.FC<ITypographyLink> = ({ children, className, ...rest }) => (
  <Typography.Link strong className={cx('fraud-link', className)} {...rest}>
    <IconItem icon={WarningHex} size={16} alt="warning" />
    {children}
  </Typography.Link>
)
