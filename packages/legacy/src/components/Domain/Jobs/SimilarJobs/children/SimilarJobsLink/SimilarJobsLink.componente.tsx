import React from 'react'
import { classNames } from '@shared/utils/common'
import { ArrowDown3 } from '@constants/icons.constants'
import { IconItem, ITypographyLink, Typography } from '@components/UI/atoms'
import styles from './SimilarJobsLink.module.scss'

const cx = classNames.bind(styles)

const SimilarJobsLink: React.FC<ITypographyLink> = (props) => (
  <Typography.Link {...props} className={cx('link', props.className)}>
    <Typography.Text strong>{props.children}</Typography.Text>
    <IconItem className={cx('link__icon')} icon={ArrowDown3} size={16} alt="arrow" />
  </Typography.Link>
)

export default SimilarJobsLink
