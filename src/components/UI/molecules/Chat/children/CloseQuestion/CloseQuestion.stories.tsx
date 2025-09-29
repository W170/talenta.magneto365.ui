import { StoryObj, Meta } from '@storybook/react'
import CloseQuestion from './CloseQuestion.component'

const meta: Meta<typeof CloseQuestion> = {
  title: 'Molecules/Chat/CloseQuestion',
  component: CloseQuestion
}
export default meta

type Story = StoryObj<typeof CloseQuestion>

export const Default: Story = {
  args: {
    type: 'multiple',
    answersSelected: [1, 2],
    onChange(answers) {
      console.log(answers)
    },
    possibleAnswers: [
      { id: 1, label: 'Adobe Photoshop' },
      { id: 2, label: 'Figma' },
      { id: 3, label: 'Sketch' },
      { id: 4, label: 'InVision' },
      { id: 6, label: 'QuantUX' },
      { id: 7, label: 'UXPin' }
    ]
  }
}
