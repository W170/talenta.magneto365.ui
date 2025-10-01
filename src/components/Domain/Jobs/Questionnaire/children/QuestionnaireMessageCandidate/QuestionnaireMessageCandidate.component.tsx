import React from 'react'
import { classNames } from '@shared/utils/common'
import { Chat } from '@components/UI/molecules/Chat'
import { EQuestionType, IQuestionnaireAnswer, TSendQuestion } from '../../Questionnaire.interface'
import styles from './QuestionnaireMessageCandidate.module.scss'
import { IconItem } from '@components/UI/atoms'
import { Pencil } from '@constants/icons.constants'

interface IQuestionnaireMessageCandidate extends IQuestionnaireAnswer {
  children: React.ReactNode
}

const cx = classNames.bind(styles)

const getAnswerLabel = (answer: TSendQuestion) => {
  if (EQuestionType.unique === answer.type || EQuestionType.multiple === answer.type)
    return answer.answer.map(({ label }) => label).join(', ')

  if (EQuestionType.openLong === answer.type || EQuestionType.openShort === answer.type) return answer.openAnswer

  return ''
}

export const QuestionnaireMessageCandidate: React.FC<IQuestionnaireMessageCandidate> = ({ questionWithAnswer, children, onChange }) => {

  const { mode, answer, question } = questionWithAnswer

  if (!answer || mode === 'editing') return <>{children}</>

  return (
    <Chat.Message
      renderLeft={() => (
        <div className={cx('edit-button-container')}>
          <button className={cx('edit-button')} onClick={() => onChange?.({ question, mode: 'editing' })}>
            <IconItem icon={Pencil} size={16} />
          </button>
        </div>
      )}
      role="candidate"
      to='right'
    >{getAnswerLabel(answer)}</Chat.Message>
  )
}
