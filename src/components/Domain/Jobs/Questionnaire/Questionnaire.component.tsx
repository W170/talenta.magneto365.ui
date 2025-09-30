import React, { useEffect, useRef } from 'react'
import { Chat  } from '@components/UI/molecules/Chat'
import { IQuestionnaire } from './Questionnaire.interface'
import { QuestionnaireQuestion } from './children/QuestionnaireQuestion'
import { useQuestionnaire } from './hooks/useQuestionnaire'

export const Questionnaire: React.FC<IQuestionnaire> = ({ questions: questionsParam }) => {
  const { next, chat } = useQuestionnaire(questionsParam)

  useEffect(() => {
    next()
  }, [next])

  return (
    <Chat ref={chat}>{({ messages }) => messages.map((msg) => <QuestionnaireQuestion key={msg.id} />)}</Chat>
  )
}
