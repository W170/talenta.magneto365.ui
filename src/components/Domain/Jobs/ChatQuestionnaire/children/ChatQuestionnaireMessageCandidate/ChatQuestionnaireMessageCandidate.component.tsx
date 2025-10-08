import React, { useEffect, useRef } from 'react'
import { IconItem } from '@components/UI/atoms'
import { classNames } from '@shared/utils/common'
import { Pencil } from '@constants/icons.constants'
import { Chat } from '@components/UI/molecules/Chat'
import { EQuestionType, IQuestionnaireAnswer, TSendQuestion } from '../../ChatQuestionnaire.interface'
import styles from './ChatQuestionnaireMessageCandidate.module.scss'

const cx = classNames.bind(styles)

const getAnswerLabel = (answer: TSendQuestion) => {
  if (EQuestionType.unique === answer.type || EQuestionType.multiple === answer.type)
    return answer.answer.map(({ titleAnswer }) => titleAnswer).join(', ')

  if (EQuestionType.openLong === answer.type || EQuestionType.openShort === answer.type) return answer.openAnswer

  return ''
}

export const ChatQuestionnaireMessageCandidate: React.FC<React.PropsWithChildren<IQuestionnaireAnswer>> = ({
  questionWithAnswer,
  children,
  onChange
}) => {
  const { mode, answer, question, questionnaireId } = questionWithAnswer
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.focus()
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    })
  }, [])

  if (!answer || mode === 'editing') return <div ref={ref}>{children}</div>

  return (
    <Chat.Message
      renderLeft={() => (
        <div className={cx('edit-button-container')}>
          <button
            className={cx('edit-button')}
            onClick={() => onChange?.({ question, mode: 'editing', questionnaireId })}
          >
            <IconItem icon={Pencil} size={16} />
          </button>
        </div>
      )}
      role="candidate"
      to="right"
    >
      {getAnswerLabel(answer)}
    </Chat.Message>
  )
}
