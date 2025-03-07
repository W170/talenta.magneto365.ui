import React from 'react'
import { IDescription } from './description.interface'
import { classNames } from '@shared/utils/common'
import styles from './description.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<IDescription> = ({ description, ...props }) => {
  const componentDescription = (description: string) => (
    <div className={cx('description')} {...props}>
      {description}
    </div>
  )

  if (description) {
    return componentDescription(description)
  }

  return null
}
/**
 *  Molecule UI component of Candidate Comments
 */
export const Description = Component
