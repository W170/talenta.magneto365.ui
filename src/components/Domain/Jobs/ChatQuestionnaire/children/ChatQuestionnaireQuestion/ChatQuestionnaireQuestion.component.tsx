import React, { useEffect, useRef, useState } from 'react'
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
export const ChatQuestionnaireQuestion: React.FC<IChatQuestionnaireQuestion> = ({
  children,
  questionWithAnswer,
  className,
  waitFor
}) => {
  const [showCandidateMessage, setShowCandidateMessage] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { question, mode } = questionWithAnswer

  useEffect(() => {
    ref.current?.focus()
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end'
    })
  }, [])

  if (!question) return null

  return (
    <div ref={ref} className={cx('question', { 'question--editing': mode === 'editing' }, className)}>
      <ChatQuestionnaireMessageLazy waitFor={waitFor} onLoad={() => setShowCandidateMessage(true)}>
        <Chat.Message className={cx('question__bot')} to="left" role="bot">
          <Typography.Text>{question.titleQuestion}</Typography.Text>
          <Typography.Text>{question.caption}</Typography.Text>
        </Chat.Message>
      </ChatQuestionnaireMessageLazy>
      {showCandidateMessage ? children : null}
    </div>
  )
}
