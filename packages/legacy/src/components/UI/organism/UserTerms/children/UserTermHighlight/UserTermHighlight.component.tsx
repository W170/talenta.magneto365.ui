import React from 'react'
import { IUserTerm } from '../../UserTerms.interface'
import { classNames } from '@shared/utils/common'
import styles from './UserTermHighlight.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<IUserTerm.Highlight> = ({ children, className }) => {
  return <h4 className={cx('user-term-highlight', className)}>{children}</h4>
}

export const UserTermHighlight = Component
