/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { ChatQuestionnaire } from './ChatQuestionnaire.component'
import { EQuestionType, IQuestion } from './ChatQuestionnaire.interface'
import { useChatQuestionnaire } from './hooks/useChatQuestionnaire'
import { ChatQuestionnaireQuestion } from './children/ChatQuestionnaireQuestion'
import { ChatQuestionnaireMessageCandidate } from './children/ChatQuestionnaireMessageCandidate'
import { ChatQuestionnaireUniqueChoice } from './children/ChatQuestionnaireUniqueChoice'
import { ChatQuestionnaireMultipleChoice } from './children/ChatQuestionnaireMultipleChoice'

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
  }
]

export const Default: Story = {
  args: {},
  render: (args) => {
    const { next, saveAnswer, chat } = useChatQuestionnaire(questions)

    useEffect(() => {
      next()
    }, [next])

    return (
      <ChatQuestionnaire {...args} ref={chat}>
        {(messages) =>
          messages.map(({ content, id }) => (
            <ChatQuestionnaireQuestion key={id} questionWithAnswer={content}>
              <ChatQuestionnaireMessageCandidate questionWithAnswer={content} onChange={saveAnswer}>
                {content.question.answerType === EQuestionType.unique && (
                  <ChatQuestionnaireUniqueChoice questionWithAnswer={content} onChange={saveAnswer} />
                )}
                {content.question.answerType === EQuestionType.multiple && (
                  <ChatQuestionnaireMultipleChoice
                    questionWithAnswer={content}
                    onChange={saveAnswer}
                    renderSubmitButton={(args) => <button {...args}>Guardar</button>}
                  />
                )}
              </ChatQuestionnaireMessageCandidate>
            </ChatQuestionnaireQuestion>
          ))
        }
      </ChatQuestionnaire>
    )
  }
}
