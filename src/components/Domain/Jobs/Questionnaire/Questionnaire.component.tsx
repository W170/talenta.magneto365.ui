import React, { forwardRef } from 'react'
import { classNames } from '@shared/utils/common'
import { Chat, IChat } from '@components/UI/molecules/Chat'
import { IQuestionnaire, IQuestionnaireMessage, IQuestionWithAnswer } from './Questionnaire.interface'
import styles from './Questionnaire.module.scss'

const cx = classNames.bind(styles)

export const Questionnaire = forwardRef<IChat.Methods, IQuestionnaire>(({ children, className }, chat) => {

  return (
    <Chat className={cx('questionnaire', className)} ref={chat}>
      {({ messages }) => (
        <>
          <div className={cx('questionnaire__mask', { 'questionnaire__mask--hidden': messages.every((msg) => (msg.content as IQuestionWithAnswer).mode === 'readonly') })}></div>
          {children?.(messages as IQuestionnaireMessage[])}
        </>
    )}
    </Chat>
  )
})

Questionnaire.displayName = 'Questionnaire'
