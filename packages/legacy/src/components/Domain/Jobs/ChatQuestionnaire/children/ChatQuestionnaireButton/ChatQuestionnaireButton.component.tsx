import React from 'react'
import { classNames } from '@shared/utils/common'
import type { IChatQuestionnaireButton } from './ChatQuestionnaireButton.interface'
import styles from './ChatQuestionnaireButton.module.scss'

const cx = classNames.bind(styles)

export const ChatQuestionnaireButton: React.FC<IChatQuestionnaireButton> = ({
  children,
  variant = 'grey',
  className,
  ...rest
}) => {
  return (
    <button {...rest} className={cx('button', `button--${variant}`, className)}>
      {children}
    </button>
  )
}
