/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { ChatQuestionnaireUniqueChoice } from './ChatQuestionnaireUniqueChoice.component'
import { EQuestionType, IQuestionWithAnswer } from '../../ChatQuestionnaire.interface'

const meta: Meta<typeof ChatQuestionnaireUniqueChoice> = {
  title: 'Domain/Jobs/ChatQuestionnaire/ChatQuestionnaireUniqueChoice',
  component: ChatQuestionnaireUniqueChoice
}
export default meta

type Story = StoryObj<typeof ChatQuestionnaireUniqueChoice>

export const Default: Story = {
  args: {
    questionWithAnswer: {
      question: {
        id: 1,
        titleQuestion: 'Which design tools do you use?',
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
      mode: 'readonly'
    }
  },
  render: (args) => {
    const [question, setQuestion] = useState(args.questionWithAnswer)

    const handleChange = (answer: IQuestionWithAnswer) => {
      setQuestion(answer)
    }

    return <ChatQuestionnaireUniqueChoice {...args} onChange={handleChange} questionWithAnswer={question} />
  }
}
