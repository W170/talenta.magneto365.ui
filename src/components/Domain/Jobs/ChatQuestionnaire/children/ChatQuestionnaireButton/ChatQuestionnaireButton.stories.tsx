import { StoryObj, Meta } from '@storybook/react'
import { ChatQuestionnaireButton } from './ChatQuestionnaireButton.component'

const meta: Meta<typeof ChatQuestionnaireButton> = {
  title: 'Domain/Jobs/ChatQuestionnaire/ChatQuestionnaireButton',
  component: ChatQuestionnaireButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['grey', 'blue', 'green'],
      defaultValue: 'grey'
    }
  }
}
export default meta

type Story = StoryObj<typeof ChatQuestionnaireButton>

export const Default: Story = {
  args: {
    children: 'Questionnaire Button'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}

export const BlueVariant: Story = {
  args: {
    children: 'Blue Button',
    variant: 'blue'
  }
}

export const GreenVariant: Story = {
  args: {
    children: 'Green Button',
    variant: 'green'
  }
}
