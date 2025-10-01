import React from 'react'
import { Radio } from '@components/UI/atoms'
import { classNames } from '@shared/utils/common'
import { EQuestionType } from '../../Questionnaire.interface'
import { IQuestionnaireUniqueChoice } from './QuestionnaireUniqueChoice.interface'
import styles from './QuestionnaireUniqueChoice.module.scss'

const cx = classNames.bind(styles)

export const QuestionnaireUniqueChoice: React.FC<IQuestionnaireUniqueChoice> = ({ questionWithAnswer, onChange, classNames, className }) => {
  const { question, answer } = questionWithAnswer;
  
  if (question.answerType !== EQuestionType.unique) return null;

  if (answer && answer.type !== EQuestionType.unique) return null;
  
  const { possibleAnswers } = question

  const handleChange = (id: number, label: string) => {
    onChange({
      question,
      mode: 'readonly',
      answer: {
        type: EQuestionType.unique,
        id: question.id,
        answer: [{ id, label }]
      }
    });
  };


  return (
    <div className={cx('answers-container', className)}>
      <div className={cx('answers', classNames?.answers)}>
      {possibleAnswers.map((possibleAnswer) => (
          <Radio
            className={cx(
              'answers__option',
              { 'answers__option--selected': answer?.answer.some(a => a.id === possibleAnswer.id) },
              classNames?.option
            )}

            checked={answer?.answer.some(a => a.id === possibleAnswer.id)}

            type="button"
            key={possibleAnswer.id}
            id={possibleAnswer.id.toString()}
            onChange={() => handleChange(possibleAnswer.id, possibleAnswer.label)}
          >
            {possibleAnswer.label}
          </Radio>
        ))}
      </div>
    </div>
  );
};
