import React from 'react'
import { IUserTerm } from '../../UserTerms.interface'
import styles from './UserTermSubtitle.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<IUserTerm.SubTitle> = ({ children, className }) => {
  return <h3 className={cx('user-term-subtitle', className)}>{children}</h3>
}
export const UserTermSubTitle = Component
