import React from 'react'
import styles from './Message.module.scss'
import { classNames } from '@shared/utils/common'
import { TMessage } from './Message.interface'

const cx = classNames.bind(styles)

const Component: React.FC<TMessage> = ({ children, to }) => {
  return (
    <span
      className={cx('bubble-container', {
        'message-left': to === 'left',
        'message-right': to === 'right'
      })}
    >
      <span className={cx('bubble-message')}>{children}</span>
    </span>
  )
}

export const Message = Component
