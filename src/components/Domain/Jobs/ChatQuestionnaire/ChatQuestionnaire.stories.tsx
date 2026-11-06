/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { EQuestionType, TQuestionnaires } from './ChatQuestionnaire.interface'
import { ChatQuestionnaire } from '.'

const meta: Meta<typeof ChatQuestionnaire> = {
  title: 'Domain/Jobs/ChatQuestionnaire',
  component: ChatQuestionnaire
}
export default meta

type Story = StoryObj<typeof ChatQuestionnaire>

const questions: TQuestionnaires[] = [
  {
    id: 1,
    questions: [
      {
        id: 1,
        titleQuestion: 'Which design tools do you use?',
        caption: 'Select all that apply',
        answerType: EQuestionType.multiple,
        possibleAnswers: [
          { id: 1, titleAnswer: 'Adobe Photoshop' },
          { id: 2, titleAnswer: 'Figma' },
          { id: 3, titleAnswer: 'Sketch' },
          { id: 4, titleAnswer: 'InVision' },
          { id: 6, titleAnswer: 'QuantUX' },
          { id: 7, titleAnswer: 'UXPin' }
        ]
      },
      {
        id: 2,
        titleQuestion: 'Which design tool do you prefer the most?',
        caption: 'Select one',
        answerType: EQuestionType.unique,
        possibleAnswers: [
          { id: 1, titleAnswer: 'Adobe Photoshop' },
          { id: 2, titleAnswer: 'Figma' },
          { id: 3, titleAnswer: 'Sketch' },
          { id: 4, titleAnswer: 'InVision' },
          { id: 6, titleAnswer: 'QuantUX' },
          { id: 7, titleAnswer: 'UXPin' }
        ]
      },
      {
        id: 3,
        titleQuestion: 'How many years of experience do you have in design?',
        caption: 'Select one',
        answerType: EQuestionType.unique,
        possibleAnswers: [
          { id: 1, titleAnswer: 'Less than 1 year' },
          { id: 2, titleAnswer: '1-3 years' },
          { id: 3, titleAnswer: '3-5 years' },
          { id: 4, titleAnswer: 'More than 5 years' }
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
  },
  {
    id: 2,
    questions: [
      {
        id: 6,
        titleQuestion: 'This is the second part, what are you interested in this role?',
        caption: undefined,
        answerType: EQuestionType.openShort,
        possibleAnswers: []
      },
      {
        id: 1,
        answerType: EQuestionType.multiple,
        titleQuestion: 'Fields that are you interested in',
        caption: 'Select the fields you are interested in this role',
        possibleAnswers: [
          { id: 1, titleAnswer: 'Frontend' },
          { id: 2, titleAnswer: 'Backend' },
          { id: 3, titleAnswer: 'Fullstack' },
          { id: 4, titleAnswer: 'Mobile' },
          { id: 5, titleAnswer: 'Data Science' },
          { id: 6, titleAnswer: 'DevOps' },
          { id: 7, titleAnswer: 'Cloud' },
          { id: 8, titleAnswer: 'Security' },
          { id: 9, titleAnswer: 'Other' }
        ]
      }
    ]
  }
]

const WrapperOpenQuestion = (props: { maxLength: number; value?: string; onChange: (answer: string) => void }) => {
  const [value, setValue] = useState<string>()

  return (
    <ChatQuestionnaire.Answer.Open
      value={value}
      onChange={({ target }) => setValue(target.value)}
      defaultValue={props.value}
      maxLength={props.maxLength}
      renderRight={({ classNameBtnSend, icon }) => (
        <button className={classNameBtnSend} type="button" onClick={() => props.onChange(value ?? props.value ?? '')}>
          {icon}
        </button>
      )}
    />
  )
}

export const Default: Story = {
  args: {},
  render: (args) => {
    const { next, saveAnswer, chat, isCompleted, getAnswers } = ChatQuestionnaire.useChat(questions)

    useEffect(() => {
      next()
    }, [next])

    return (
      <>
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
                          questionnaireId: content.questionnaireId,
                          answer: { id: content.question.id, type: EQuestionType.openShort, openAnswer }
                        })
                      }
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
                          questionnaireId: content.questionnaireId,
                          answer: { id: content.question.id, type: EQuestionType.openLong, openAnswer }
                        })
                      }
                    />
                  )}
                </ChatQuestionnaire.MessageCandidate>
              </ChatQuestionnaire.Question>
            ))
          }
        </ChatQuestionnaire>
        <footer>
          <ChatQuestionnaire.Button
            disabled={!isCompleted}
            variant="green"
            onClick={() => {
              console.log(JSON.stringify(getAnswers()))
            }}
          >
            Enviar
          </ChatQuestionnaire.Button>
        </footer>
      </>
    )
  }
}
