import { StoryObj, Meta } from '@storybook/react'
import { TCloseAnswer } from './uniqueQuestion.interface'
import UniqueQuestion from './uniqueQuestion.component'

const meta: Meta<typeof UniqueQuestion> = {
  title: 'Molecules/UniqueQuestion',
  component: UniqueQuestion,
  args: {
    question: {
      titleQuestion: '¿Tu experiencia laboral está relacionada con el cargo?',
      answerType: 1,
      id: 25,
      possibleAnswers: [
        { id: 1, titleAnswer: 'Si' },
        { id: 2, titleAnswer: 'No' }
      ]
    },
    showOptions: true,
    textHelp: 'Selecciona una opción',
    onChange: (answer: TCloseAnswer) => {
      alert(`el id seleccionado es ${answer.answer[0]}`)
    }
  }
}

export default meta

type Story = StoryObj<typeof UniqueQuestion>

export const Default: Story = {
  args: {}
}
