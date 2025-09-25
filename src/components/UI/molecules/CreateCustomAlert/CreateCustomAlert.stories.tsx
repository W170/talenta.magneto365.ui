import { Meta, StoryObj } from '@storybook/react'
import { CreateCustomAlert } from './CreateCustomAlert.component'
import { CreateCustomAlertProps } from '@constants/stories/createCustomAlert.constants'

const meta: Meta<typeof CreateCustomAlert> = {
  title: 'Molecules/Create Custom Alert',
  component: CreateCustomAlert,
  args: { ...CreateCustomAlertProps }
}

export default meta

type Story = StoryObj<typeof CreateCustomAlert>

export const Default: Story = {}
