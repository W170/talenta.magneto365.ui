import React from 'react'
import styles from './Message.module.scss'
import { classNames } from '@shared/utils/common'
import { TMessage } from './Message.interface'

const cx = classNames.bind(styles)

const Component: React.FC<TMessage> = ({ children, to, classNames, className, renderLeft, renderRight, ...rest }) => {
  return (
    <article
      className={cx('bubble-container', className, {
        'message-left': to === 'left',
        'message-right': to === 'right',
      })}
      {...rest}
    >
      {renderLeft?.()}
      <span className={cx('bubble-message', classNames?.content)}>{children}</span>
      {renderRight?.()}
    </article>
  )
}

export const Message = Component
