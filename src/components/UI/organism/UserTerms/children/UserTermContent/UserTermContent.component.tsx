import React from 'react'
import { IUserTerm } from '../../UserTerms.interface'
import styles from './UserTermContent.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<IUserTerm.Content> = ({ children, className }) => {
  return <div className={cx('user-term-content', className)}>{children}</div>
}
export const UserTermContent = Component
