import React, { useState } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { EQuestionType, IQuestionWithAnswer } from '../../Questionnaire.interface'
import { QuestionnaireMultipleChoice } from './QuestionnaireMultipleChoice.component'

const meta: Meta<typeof QuestionnaireMultipleChoice> = {
  title: 'Domain/Jobs/Questionnaire/QuestionnaireMultipleChoice',
  component: QuestionnaireMultipleChoice
}
export default meta

type Story = StoryObj<typeof QuestionnaireMultipleChoice>

export const Default: Story = {
  args: {
    questionWithAnswer: {
      question: {
        id: 1,
        titleQuestion: 'Which design tools do you use?',
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
      mode: 'readonly',
    },
    renderSubmitButton: ({ disabled, className }) => (
      <button type="submit" className={className} disabled={disabled}>
        Submit
      </button>
    )
  },
  render: (args) => {
    const [question, setQuestion] = useState(args.questionWithAnswer);

    const handleChange = (answer: IQuestionWithAnswer) => {
      setQuestion(answer);
    }

    return <QuestionnaireMultipleChoice {...args} onChange={handleChange} questionWithAnswer={question}/>
  }
}
