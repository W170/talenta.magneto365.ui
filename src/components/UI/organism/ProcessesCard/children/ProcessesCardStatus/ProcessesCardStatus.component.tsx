import React from 'react'
import { IProcessesCard } from '../../ProcessesCard.interface'
import styles from '../../ProcessesCard.module.scss'
import { classNames } from '@shared/utils/common'
const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard.ICardStatus> = ({ children, className }) => {
  return <div className={cx('processes-card__status-card', className)}>{children}</div>
}

export const ProcessesCardStatus = Component
