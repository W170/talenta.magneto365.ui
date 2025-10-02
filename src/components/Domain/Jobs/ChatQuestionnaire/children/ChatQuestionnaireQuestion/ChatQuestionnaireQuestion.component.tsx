import React, { useState } from 'react'
import { classNames } from '@shared/utils/common'
import { Chat } from '@components/UI/molecules/Chat'
import { Typography } from '@components/UI/atoms/Typography'
import { ChatQuestionnaireMessageLazy } from '../ChatQuestionnaireMessageLazy'
import { IChatQuestionnaireQuestion } from './ChatQuestionnaireQuestion.interface'
import styles from './ChatQuestionnaireQuestion.module.scss'

const cx = classNames.bind(styles)

/**
 * A Question is a Special Chat message, it includes message question and answer.
 * @returns
 */
export const ChatQuestionnaireQuestion: React.FC<IChatQuestionnaireQuestion> = ({ children, questionWithAnswer, className }) => {
  const [showCandidateMessage, setShowCandidateMessage] = useState(false)
  const { question, mode } = questionWithAnswer


  if (!question) return null

  return (
    <div className={cx('question', { 'question--editing': mode === 'editing' }, className)}>
      <ChatQuestionnaireMessageLazy onLoad={() => setShowCandidateMessage(true)}>
        <Chat.Message className={cx('question__bot')} to='left' role="bot">
          <Typography.Text>{question.titleQuestion}</Typography.Text>
          <Typography.Text>{question.caption}</Typography.Text>
        </Chat.Message>
      </ChatQuestionnaireMessageLazy>
      {showCandidateMessage ? children : null}
    </div>
  )
}
