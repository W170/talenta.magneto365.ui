import { Radio, Typography } from '@components/UI/atoms'
import React from 'react'
import { TMultipleQuestion } from './multipleQuestion.interface'
import styles from './multipleQuestion.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const MultipleQuestion: React.FC<TMultipleQuestion> = ({
  question,
  onChange,
  showOptions = true,
  textHelp,
  textButton,
  className,
  answersSelected
}) => {
  const { titleQuestion, possibleAnswers, id: idQuestion, answerType } = question
  const handleOnChange = (idAnswer: number) => {
    if (answersSelected?.answer === undefined) {
      return onChange({ id: idQuestion, type: answerType, answer: [idAnswer] })
    }

    const isSelected = answersSelected.answer.includes(idAnswer)

    return onChange({
      ...answersSelected,
      answer: isSelected
        ? answersSelected?.answer.filter((id) => id !== idAnswer)
        : [...answersSelected.answer, idAnswer]
    })
  }

  return (
    <div className={cx('multiple-question', className?.component)}>
      <div className={cx('multiple-question__bubble', className?.buble)}>
        <Typography.Text className={cx('bubble__question', className?.question)}>{titleQuestion}</Typography.Text>
        <Typography.Text className={cx('bubble__help', className?.textHelp)}>{textHelp}</Typography.Text>
      </div>
      {showOptions && (
        <div className={cx('multiple-question__answers', className?.answers)}>
          {possibleAnswers.map((pa) => (
            <Radio
              className={cx(
                'answers__option',
                { 'answers__option--selected': answersSelected?.answer.includes(pa.id) },
                className?.option
              )}
              type="button"
              key={pa.id}
              id={pa.id.toString()}
              onChange={() => handleOnChange(pa.id)}
            >
              {pa.titleAnswer}
            </Radio>
          ))}
        </div>
      )}
      <button className={cx('multiple-question__continue-button')}>{textButton}</button>
    </div>
  )
}

export default MultipleQuestion
