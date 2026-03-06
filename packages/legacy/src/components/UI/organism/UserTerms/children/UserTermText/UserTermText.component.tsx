import React from 'react'
import { IUserTerm } from '../../UserTerms.interface'
import styles from './UserTermText.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<IUserTerm.Highlight> = ({ children, className }) => {
  return <p className={cx('user-term-text', className)}>{children}</p>
}

export const UserTermText = Component
