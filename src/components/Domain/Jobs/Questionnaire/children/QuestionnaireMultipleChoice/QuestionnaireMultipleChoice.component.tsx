import React, { useState } from 'react';
import { Checkbox } from '@components/UI/atoms';
import { classNames } from '@shared/utils/common';
import { EQuestionType, IPossibleAnswer, TSendCloseQuestion } from '../../Questionnaire.interface';
import { IQuestionnaireMultipleChoice } from './QuestionnaireMultipleChoice.interface';
import styles from './QuestionnaireMultipleChoice.module.scss';

const cx = classNames.bind(styles);

export const QuestionnaireMultipleChoice: React.FC<IQuestionnaireMultipleChoice> = ({ questionWithAnswer, onChange, renderSubmitButton }) => {
  const { question, answer } = questionWithAnswer;

  if (question.answerType !== EQuestionType.multiple) return null;
  if (answer && answer.type !== EQuestionType.multiple) return null;

  const [selectedAnswerIds, setSelectedAnswerIds] = useState<number[]>(() => answer?.answer.map(a => a.id) ?? []);

  const handleCheckboxChange = (id: number) => {
    setSelectedAnswerIds(prevIds => {
      if (prevIds.includes(id)) {
        return prevIds.filter(checkedId => checkedId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };


  const isDisabled = selectedAnswerIds.length === 0;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isDisabled) return;

    const currentAnswers: IPossibleAnswer[] = selectedAnswerIds
      .map(id => question.possibleAnswers.find(pa => pa.id === id))
      .filter((a): a is IPossibleAnswer => a !== undefined);

    const newAnswer: TSendCloseQuestion = {
      type: EQuestionType.multiple,
      id: question.id,
      answer: currentAnswers,
    };
    onChange(newAnswer);
  };

  return (
    <form className={cx("answers-container")} onSubmit={handleSubmit}>
      <div className={cx('answers')}>
        {question.possibleAnswers.map((possibleAnswer) => (
          <Checkbox
            className={cx(
              'answers__option',
              { 'answers__option--selected': selectedAnswerIds.includes(possibleAnswer.id) },
            )}
            key={possibleAnswer.id}
            name={`question-${question.id}`}
            id={`multiple-${possibleAnswer.id}`}
            checked={selectedAnswerIds.includes(possibleAnswer.id)}
            onChange={() => handleCheckboxChange(possibleAnswer.id)}
            renderCheck={() => null}
          >
            {possibleAnswer.label}
          </Checkbox>
        ))}
      </div>
      {renderSubmitButton({ disabled: isDisabled, className: cx('continue-button') })}
    </form>
  );
};
