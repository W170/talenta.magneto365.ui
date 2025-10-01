import React, { useState } from 'react'
import { Chat } from '@components/UI/molecules/Chat'
import { Typography } from '@components/UI/atoms/Typography'
import { QuestionnaireMessageLazy } from '../QuestionnaireMessageLazy'
import { IQuestion, TSendQuestion } from '../../Questionnaire.interface'

interface IQuestionnaireQuestion {
  className?: string
  onAnswer?: (answer: TSendQuestion) => void
  children?: React.ReactNode
  question: IQuestion
}

/**
 * A Question is a Special Chat message, it includes message question and answer.
 * @returns
 */
export const QuestionnaireQuestion: React.FC<IQuestionnaireQuestion> = ({ children, question, className, onAnswer }) => {
  const [showCandidateMessage, setShowCandidateMessage] = useState(false)

  if (!question) return null

  return (
    <div>
      <QuestionnaireMessageLazy onLoad={() => setShowCandidateMessage(true)}>
        <Chat.Message to='left' role="bot">
          <Typography.Text>{question.titleQuestion}</Typography.Text>
          <Typography.Text>{question.caption}</Typography.Text>
        </Chat.Message>
      </QuestionnaireMessageLazy>
      {showCandidateMessage ? children : null}
    </div>
  )
}
