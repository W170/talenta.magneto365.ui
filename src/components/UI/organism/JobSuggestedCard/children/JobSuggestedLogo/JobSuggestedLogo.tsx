import React from 'react'
import styles from './JobSuggestedLogo.module.scss'
import { classNames } from '@shared/utils/common'
import { IJobSuggestedCard } from '../../JobSuggestedCard.interface'

const cx = classNames.bind(styles)
const Component: React.FC<IJobSuggestedCard.Logo> = ({ className, logo }) => {
  return <img src={logo} className={cx('logo', className)} />
}

export const JobSuggestedLogo = Component
