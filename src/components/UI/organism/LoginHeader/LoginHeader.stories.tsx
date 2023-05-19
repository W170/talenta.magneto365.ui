import { LoginHeader } from './LoginHeader.component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LoginHeader> = {
  title: 'Organism/LoginHeader',
  component: LoginHeader,
  args: {}
}

export default meta

type Story = StoryObj<typeof LoginHeader>

export const Default: Story = {}
