/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { EQuestionType, IQuestionWithAnswer } from '../../ChatQuestionnaire.interface'
import { ChatQuestionnaireMultipleChoice } from './ChatQuestionnaireMultipleChoice.component'

const meta: Meta<typeof ChatQuestionnaireMultipleChoice> = {
  title: 'Domain/Jobs/ChatQuestionnaire/ChatQuestionnaireMultipleChoice',
  component: ChatQuestionnaireMultipleChoice
}
export default meta

type Story = StoryObj<typeof ChatQuestionnaireMultipleChoice>

export const Default: Story = {
  args: {
    questionWithAnswer: {
      question: {
        id: 1,
        titleQuestion: 'Which design tools do you use?',
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
      mode: 'readonly'
    },
    renderSubmitButton: ({ disabled, className }) => (
      <button type="submit" className={className} disabled={disabled}>
        Submit
      </button>
    )
  },
  render: (args) => {
    const [question, setQuestion] = useState(args.questionWithAnswer)

    const handleChange = (answer: IQuestionWithAnswer) => {
      setQuestion(answer)
    }

    return <ChatQuestionnaireMultipleChoice {...args} onChange={handleChange} questionWithAnswer={question} />
  }
}
