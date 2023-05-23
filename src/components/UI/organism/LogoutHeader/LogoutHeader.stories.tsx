import { Meta, StoryObj } from '@storybook/react'
import { LogoutHeader } from './LogoutHeader.component'

const meta: Meta<typeof LogoutHeader> = {
  title: 'Organism/Logout Header',
  component: LogoutHeader,
  args: {}
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
