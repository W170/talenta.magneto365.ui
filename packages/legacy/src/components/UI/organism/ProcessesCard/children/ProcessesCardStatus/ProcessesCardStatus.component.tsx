import React from 'react'
import { IProcessesCard } from '../../ProcessesCard.interface'
import styles from '../../ProcessesCard.module.scss'
import { classNames } from '@shared/utils/common'
const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard.ICardStatus> = ({
  children,
  className,
  status = 'Pending',
  isSelected = false
}) => {
  return (
    <div
      className={cx('processes-card__status-card', className, `processes-card__status-card--${status}`, {
        'processes-card__status-card--is-selected': isSelected
      })}
    >
      {children}
    </div>
  )
}

export const ProcessesCardStatus = Component
