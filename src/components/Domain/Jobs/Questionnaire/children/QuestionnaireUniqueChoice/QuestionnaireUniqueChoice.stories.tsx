import React, { useState } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { QuestionnaireUniqueChoice } from './QuestionnaireUniqueChoice.component'
import { EQuestionType, IQuestionWithAnswer } from '../../Questionnaire.interface'

const meta: Meta<typeof QuestionnaireUniqueChoice> = {
  title: 'Domain/Jobs/Questionnaire/QuestionnaireUniqueChoice',
  component: QuestionnaireUniqueChoice
}
export default meta

type Story = StoryObj<typeof QuestionnaireUniqueChoice>

export const Default: Story = {
  args: {
    questionWithAnswer: {
      question: {
        id: 1,
        titleQuestion: 'Which design tools do you use?',
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
      mode: 'readonly',
    },
  },
  render: (args) => {
    const [question, setQuestion] = useState(args.questionWithAnswer);

    const handleChange = (answer: IQuestionWithAnswer) => {
      setQuestion(answer);
    }

    return <QuestionnaireUniqueChoice {...args} onChange={handleChange} questionWithAnswer={question}/>
  }
}
