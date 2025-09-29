import React from 'react'
import { classNames } from '@shared/utils/common'
import styles from '../../ProcessesCard.module.scss'
import { IProcessesCard } from '../../ProcessesCard.interface'
import { ArrowRightBlack } from '@constants/icons.constants'

const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard.IArrow> = ({ className, status, ...props }) => {
  return (
    <img
      className={cx('processes-card__arrow-left', `processes-color-icon--${status}`, className)}
      src={ArrowRightBlack}
      {...props}
    />
  )
}

export const ProcessesCardArrow = Component
