import { Meta, StoryObj } from '@storybook/react'
import { CompletionAlert } from './CompletionAlert.component'
import { CompletionAlertProps } from '../../../../constants/stories/completionAlert'

const meta: Meta<typeof CompletionAlert> = {
  title: 'Molecules/Completion Alert',
  component: CompletionAlert,
  args: { ...CompletionAlertProps }
}

export default meta

type Story = StoryObj<typeof CompletionAlert>

export const Default: Story = {}
