import { Radio } from '@components/UI/atoms'
import React from 'react'
import styles from './CloseQuestion.module.scss'
import { classNames } from '@shared/utils/common'
import { TCloseAnswers } from '../../Chat.interface'

const cx = classNames.bind(styles)

const CloseQuestion: React.FC<TCloseAnswers> = ({
  possibleAnswers,
  className,
  answersSelected,
  idQuestion,
  type,
  buttonContinueText,
  onChange,
  onCloseAnswers
}) => {
  const multipleAnswers = (idAnswer: number) => {
    if (answersSelected.includes(idAnswer)) return
    if (answersSelected.length === 0) {
      return onChange({ id: idQuestion, type, answer: [idAnswer] })
    }

    const isSelected = answersSelected.includes(idAnswer)

    return onChange({
      id: idQuestion,
      type,
      answer: isSelected ? answersSelected?.filter((id) => id !== idAnswer) : [...answersSelected, idAnswer]
    })
  }

  const uniqueAnswers = (idAnswer: number) => {
    onChange({ answer: [idAnswer], id: idQuestion, type })
    onCloseAnswers()
  }

  const handleOnChange = (idAnswer: number) => {
    type === 'unique' ? uniqueAnswers(idAnswer) : multipleAnswers(idAnswer)
  }

  return (
    <div className={cx('answers-container')}>
      <div className={cx('answers', className?.answers)}>
        {possibleAnswers.map((pa) => (
          <Radio
            className={cx(
              'answers__option',
              { 'answers__option--selected': answersSelected?.includes(pa.id) },
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
      <button
        className={cx('continue-button')}
        disabled={answersSelected.length === 0}
        onClick={() => {
          onCloseAnswers()
        }}
      >
        {buttonContinueText}
      </button>
    </div>
  )
}

export default CloseQuestion
