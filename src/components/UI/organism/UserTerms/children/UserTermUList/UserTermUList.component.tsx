import React from 'react'
import { IUserTerm } from '../../UserTerms.interface'
import styles from './UserTermUList.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<IUserTerm.UlList> = ({ children, className }) => {
  return <ul className={cx('user-term-u-list', className)}>{children}</ul>
}

export const UserTermUList = Component
