import { Radio, Typography } from '@components/UI/atoms'
import React from 'react'
import { TUniqueQuestion } from './uniqueQuestion.interface'
import styles from './uniqueQuestion.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const UniqueQuestion: React.FC<TUniqueQuestion> = ({ question, onChange, showOptions = true, textHelp, className }) => {
  const { titleQuestion, possibleAnswers, id: idQuestion, answerType } = question
  const handleOnChange = (idAnswer: number) => {
    onChange({ id: idQuestion, answer: [idAnswer], type: answerType })
  }

  return (
    <div className={cx('unique-question', className?.component)}>
      <div className={cx('unique-question__bubble', className?.buble)}>
        <Typography.Text className={cx('bubble__question', className?.question)}>{titleQuestion}</Typography.Text>
        <Typography.Text className={cx('bubble__help', className?.textHelp)}>{textHelp}</Typography.Text>
      </div>
      {showOptions && (
        <div className={cx('unique-question__answers', className?.answers)}>
          {possibleAnswers.map((pa) => (
            <Radio
              className={cx('answers__option', className?.option)}
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
    </div>
  )
}

export default UniqueQuestion
