import React from 'react'
import { IName } from './name.interface'
import { classNames } from '@shared/utils/common'
import styles from './name.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<IName> = ({ name, ...props }) => {
  const componentName = (value: string) => (
    <div className={cx('name')} {...props}>
      {value}
    </div>
  )

  if (name) {
    return componentName(name)
  }

  return null
}
/**
 *  Molecule UI component of Candidate Comments
 */
export const Name = Component
