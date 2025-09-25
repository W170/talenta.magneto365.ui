import React from 'react'
import { classNames } from '@shared/utils/common'
import styles from '../../ProcessesCard.module.scss'
import { IProcessesCard } from '../../ProcessesCard.interface'
const cx = classNames.bind(styles)

const Component: React.FC<IProcessesCard.IArrow> = ({ color, ...props }) => {
  return (
    <span className={cx('processes-card__arrow-left')} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24">
        <path
          stroke={color || '#404040'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d="m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
        />
      </svg>
    </span>
  )
}

export const ProcessesCardArrow = Component
