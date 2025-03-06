import React from 'react'
import { IAvatar } from './avatar.interface'
import { classNames } from '@shared/utils/common'
import styles from './avatar.module.scss'
import { Avatar } from '@components/UI/atoms'

const cx = classNames.bind(styles)

const Component: React.FC<IAvatar> = ({ src, ...props }) => {
  const componentAvatar = (value: string) => (
    <div className={cx('avatar')} {...props}>
      <Avatar userImage={value} />
    </div>
  )

  if (src) {
    return componentAvatar(src)
  }

  return null
}
/**
 *  Molecule UI component of Candidate Comments
 */
export const AvatarComments = Component
