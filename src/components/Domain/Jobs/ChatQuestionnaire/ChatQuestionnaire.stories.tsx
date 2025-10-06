/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { EQuestionType, IQuestion } from './ChatQuestionnaire.interface'
import { ChatQuestionnaire } from '.'

const meta: Meta<typeof ChatQuestionnaire> = {
  title: 'Domain/Jobs/ChatQuestionnaire',
  component: ChatQuestionnaire
}
export default meta

type Story = StoryObj<typeof ChatQuestionnaire>

const questions: IQuestion[] = [
  {
    id: 1,
    titleQuestion: 'Which design tools do you use?',
    caption: 'Select all that apply',
    answerType: EQuestionType.multiple,
    possibleAnswers: [
      { id: 1, label: 'Adobe Photoshop' },
      { id: 2, label: 'Figma' },
      { id: 3, label: 'Sketch' },
      { id: 4, label: 'InVision' },
      { id: 6, label: 'QuantUX' },
      { id: 7, label: 'UXPin' }
    ]
  },
  {
    id: 2,
    titleQuestion: 'Which design tool do you prefer the most?',
    caption: 'Select one',
    answerType: EQuestionType.unique,
    possibleAnswers: [
      { id: 1, label: 'Adobe Photoshop' },
      { id: 2, label: 'Figma' },
      { id: 3, label: 'Sketch' },
      { id: 4, label: 'InVision' },
      { id: 6, label: 'QuantUX' },
      { id: 7, label: 'UXPin' }
    ]
  },
  {
    id: 3,
    titleQuestion: 'How many years of experience do you have in design?',
    caption: 'Select one',
    answerType: EQuestionType.unique,
    possibleAnswers: [
      { id: 1, label: 'Less than 1 year' },
      { id: 2, label: '1-3 years' },
      { id: 3, label: '3-5 years' },
      { id: 4, label: 'More than 5 years' }
    ]
  },
  {
    id: 4,
    titleQuestion: 'What specific fields has more experience for this role?',
    caption: undefined,
    answerType: EQuestionType.openShort,
    possibleAnswers: []
  },
  {
    id: 5,
    titleQuestion: 'Tell us about your experience in UI/UX',
    caption: undefined,
    answerType: EQuestionType.openLong,
    possibleAnswers: []
  }
]

const WrapperOpenQuestion = (props: { maxLength: number, value?: string, onChange: (answer: string) => void }) => {
  const [value, setValue] = useState<string>();

  return (
    <ChatQuestionnaire.Answer.Open
      value={value}
      onChange={({ target }) => setValue(target.value)}
      defaultValue={props.value} maxLength={props.maxLength}
      renderRight={({ classNameBtnSend, icon }) =>
        <button
          className={classNameBtnSend}
          type='button'
          onClick={() => props.onChange(value ?? props.value ?? '')}>
          {icon}
        </button>} />
  )
}

export const Default: Story = {
  args: {},
  render: (args) => {
    const { next, saveAnswer, chat } = ChatQuestionnaire.useChat(questions)

    useEffect(() => {
      next()
    }, [next])

    return (
      <ChatQuestionnaire {...args} ref={chat}>
        {(messages) =>
          messages.map(({ content, id }) => (
            <ChatQuestionnaire.Question waitFor={2000} key={id} questionWithAnswer={content}>
              <ChatQuestionnaire.MessageCandidate questionWithAnswer={content} onChange={saveAnswer}>
                {content.question.answerType === EQuestionType.unique && (
                  <ChatQuestionnaire.Answer.UniqueChoice questionWithAnswer={content} onChange={saveAnswer} />
                )}
                {content.question.answerType === EQuestionType.multiple && (
                  <ChatQuestionnaire.Answer.MultipleChoice
                    questionWithAnswer={content}
                    onChange={saveAnswer}
                    renderSubmitButton={(args) => <button {...args}>Guardar</button>}
                  />
                )}
                {content.question.answerType === EQuestionType.openShort && (
                  <WrapperOpenQuestion 
                    maxLength={120}
                    value={content.answer?.type === EQuestionType.openShort ? content.answer?.openAnswer : ''}
                    onChange={(openAnswer) => 
                      saveAnswer({ 
                        mode: 'readonly',
                        question: content.question,
                        answer: { id: content.question.id, type: EQuestionType.openShort, openAnswer } })} 
                  />
                )}
                {content.question.answerType === EQuestionType.openLong && (
                  <WrapperOpenQuestion 
                    maxLength={2500}
                    value={content.answer?.type === EQuestionType.openLong ? content.answer?.openAnswer : ''}
                    onChange={(openAnswer) => 
                      saveAnswer({ 
                        mode: 'readonly',
                        question: content.question,
                        answer: { id: content.question.id, type: EQuestionType.openLong, openAnswer } })} 
                  />
                )}
              </ChatQuestionnaire.MessageCandidate>
            </ChatQuestionnaire.Question>
          ))
        }
      </ChatQuestionnaire>
    )
  }
}
