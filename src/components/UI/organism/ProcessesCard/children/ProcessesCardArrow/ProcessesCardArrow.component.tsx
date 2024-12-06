import React from 'react'
import { classNames } from '@shared/utils/common'
import styles from '../../ProcessesCard.module.scss'
import { IProcessesCard } from '../../ProcessesCard.interface'
const cx = classNames.bind(styles)
import { ArrowRight2 } from '@constants/icons.constants'

const Component: React.FC<IProcessesCard.IArrow> = ({ className, ...props }) => {
  return <img className={cx('processes-card__arrow-left', className)} src={ArrowRight2} {...props} />
}

export const ProcessesCardArrow = Component
