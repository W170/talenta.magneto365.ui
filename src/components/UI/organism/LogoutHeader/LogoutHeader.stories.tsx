import { Meta, StoryObj } from '@storybook/react'
import { LogoutHeader } from './LogoutHeader.component'

const meta: Meta<typeof LogoutHeader> = {
  title: 'Organism/LogoutHeader',
  component: LogoutHeader,
  args: {}
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
