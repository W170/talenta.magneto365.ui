import { StoryObj, Meta } from '@storybook/react'
import { TCloseAnswer } from './multipleQuestion.interface'
import MultipleQuestion from './multipleQuestion.component'

const meta: Meta<typeof MultipleQuestion> = {
  title: 'Molecules/MultipleQuestion',
  component: MultipleQuestion,
  args: {
    question: {
      titleQuestion: '¿Con cuál de estos programas has trabajado?',
      answerType: 1,
      id: 25,
      possibleAnswers: [
        { id: 1, titleAnswer: 'Adobe Photoshop' },
        { id: 2, titleAnswer: 'Figma' },
        { id: 3, titleAnswer: 'Sketch' },
        { id: 4, titleAnswer: 'InVision' },
        { id: 6, titleAnswer: 'QuantUX' },
        { id: 7, titleAnswer: 'UXPin' }
      ]
    },
    showOptions: true,
    textHelp: 'Puedes seleccionar una o varias opciones',
    textButton: 'Continuar',
    onChange: (answer: TCloseAnswer) => {
      alert(`el id seleccionado es ${answer.answer.join(',')}`)
    },
    answersSelected: { answer: [2, 4], id: 25, type: 1 }
  }
}

export default meta

type Story = StoryObj<typeof MultipleQuestion>

export const Default: Story = {
  args: {}
}
