import { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider.component'

const meta: Meta<typeof Divider> = {
  title: 'Legacy/Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  args: {}
}

export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {}
