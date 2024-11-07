import React from 'react'
import { IUserTerm } from '../../UserTerms.interface'
import styles from './UserTermCheck.module.scss'
import { classNames } from '@shared/utils/common'
import { Checkbox } from '@components/UI/atoms/Checkbox'

const cx = classNames.bind(styles)

const Component: React.FC<IUserTerm.Check> = ({ children, className, isChecked, onChange }) => {
  return (
    <div className={cx('user-term-check', className)}>
      <Checkbox
        type="box"
        display="block"
        className={cx('select-list__checkbox')}
        checked={isChecked}
        onChange={onChange}
      >
        {children}
      </Checkbox>
    </div>
  )
}
export const UserTermCheck = Component
