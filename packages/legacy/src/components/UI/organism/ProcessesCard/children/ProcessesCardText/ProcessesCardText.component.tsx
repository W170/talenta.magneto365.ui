import React from 'react'
import { IProcessesCard } from '../../ProcessesCard.interface'
import styles from '../../ProcessesCard.module.scss'
import { classNames } from '@shared/utils/common'
const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard.IText> = ({ children, className, status = 'Pending', strong = false }) => {
  return (
    <p
      className={cx('processes-card__text', className, `processes-text-status--${status}`, {
        'processes-card__text--strong': strong
      })}
    >
      {children}
    </p>
  )
}

export const ProcessesCardText = Component
