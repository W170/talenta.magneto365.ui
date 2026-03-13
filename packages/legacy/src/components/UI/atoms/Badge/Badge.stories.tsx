import { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge.component'

const meta: Meta<typeof Badge> = {
  title: 'Legacy/Atoms/Badge',
  component: Badge,
  args: {
    number: 10
  }
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {}

export const WithoutNumber: Story = {
  args: {
    number: undefined
  }
}
