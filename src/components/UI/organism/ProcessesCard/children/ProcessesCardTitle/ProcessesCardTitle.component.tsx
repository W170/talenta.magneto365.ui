import React from 'react'
import { IProcessesCard } from '../../ProcessesCard.interface'
import { classNames } from '@shared/utils/common'
import styles from '../../ProcessesCard.module.scss'
const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard.ITitle> = ({ children, className }) => {
  return <h3 className={cx('processes-card__title', className)}>{children}</h3>
}

export const ProcessesCardTitle = Component
