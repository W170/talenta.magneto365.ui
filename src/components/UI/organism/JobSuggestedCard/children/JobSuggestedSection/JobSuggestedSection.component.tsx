import React from 'react'
import styles from './JobSuggestedSection.module.scss'
import { classNames } from '@shared/utils/common'
import { IJobSuggestedCard } from '../../JobSuggestedCard.interface'

const cx = classNames.bind(styles)
const Component: React.FC<IJobSuggestedCard.Section> = ({
  aligned = 'start',
  className,
  children,
  direction = 'row'
}) => {
  return <div className={cx('section', aligned, direction, className)}>{children}</div>
}

export const JobSuggestedSection = Component
