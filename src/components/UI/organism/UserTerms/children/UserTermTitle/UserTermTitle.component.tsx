import React from 'react'
import { IUserTerm } from '../../UserTerms.interface'
import styles from './UserTermTitle.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<IUserTerm.Title> = ({ children, className }) => {
  return <h2 className={cx('user-term-title', className)}>{children}</h2>
}
export const UserTermTitle = Component
