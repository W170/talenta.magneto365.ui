import React from 'react'
import { classNames } from '@shared/utils/common'
import styles from '../../ProcessesCard.module.scss'
import { IProcessesCard } from '../../ProcessesCard.interface'
const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard.IBrand> = ({ className, ...props }) => {
  return <img className={cx('processes-card__brand', className)} {...props} />
}

export const ProcessesCardBrand = Component
