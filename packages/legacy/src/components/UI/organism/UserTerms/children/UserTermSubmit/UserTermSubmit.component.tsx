import React from 'react'
import { IUserTerm } from '../../UserTerms.interface'
import { FlatLoader } from '@components/UI/atoms'
import styles from './UserTermSubmit.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<IUserTerm.Submit> = ({ isLoading, children, className, ...props }) => {
  return (
    <button className={cx('user-term-submit', className)} {...props}>
      {isLoading && <FlatLoader color="white" secondColor="transparent" />}
      {children}
    </button>
  )
}

export const UserTermSubmit = Component
