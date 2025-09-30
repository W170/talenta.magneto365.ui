import React from 'react'
import styles from './Message.module.scss'
import { classNames } from '@shared/utils/common'
import { TMessage } from './Message.interface'

const cx = classNames.bind(styles)

const Component: React.FC<TMessage> = ({ children, to, classNames, className, ...rest }) => {
  return (
    <article
      className={cx('bubble-container', className, {
        'message-left': to === 'left',
        'message-right': to === 'right',
      })}
      {...rest}
    >
      <span className={cx('bubble-message', classNames?.content)}>{children}</span>
    </article>
  )
}

export const Message = Component
