import React from 'react'
import { classNames } from '@shared/utils/common'
import styles from '../../ProcessesCard.module.scss'
import { IProcessesCard } from '../../ProcessesCard.interface'
const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard.ISection> = ({ children, className }) => {
  return <div className={cx('processes-card__section', className)}>{children}</div>
}

export const ProcessesCardSection = Component
