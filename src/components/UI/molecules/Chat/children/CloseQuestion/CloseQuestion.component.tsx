import { Radio } from '@components/UI/atoms'
import React from 'react'
import styles from './CloseQuestion.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

type TPossibleAnswer = {
  id: number
  label: string
}

type TCloseAnswers = {
  possibleAnswers: TPossibleAnswer[]
  answersSelected: string[]
  type: 'multiple' | 'unique'
  questionStatus: 'edit' | 'send'
  className?: {
    answers?: string
    option: string
  }
  onChange: (questionStatus: 'edit' | 'send', answers: string[]) => void
}

const CloseQuestion: React.FC<TCloseAnswers> = ({
  possibleAnswers,
  className,
  answersSelected,
  type,
  onChange,
  questionStatus
}) => {
  const multipleAnswers = (idAnswer: number) => {
    console.log(idAnswer)
  }

  const uniqueAnswers = (idAnswer: number) => {
    onChange('send', [idAnswer.toString()])
  }

  const handleOnChange = (idAnswer: number) => {
    type === 'unique' ? uniqueAnswers(idAnswer) : multipleAnswers(idAnswer)
  }

  if (questionStatus !== 'edit') return null

  return (
    <div>
      <div className={cx('answers', className?.answers)}>
        {possibleAnswers.map((pa) => (
          <Radio
            className={cx(
              'answers__option',
              { 'answers__option--selected': answersSelected?.includes(pa.id.toString()) },
              className?.option
            )}
            type="button"
            key={pa.id}
            id={pa.id.toString()}
            onChange={() => handleOnChange(pa.id)}
          >
            {pa.label}
          </Radio>
        ))}
      </div>
      <button className={cx('multiple-question__continue-button')}>Enviar</button>
    </div>
  )
}

export default CloseQuestion
