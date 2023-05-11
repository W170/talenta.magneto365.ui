import { Meta, StoryObj } from '@storybook/react'
import MenuItem from './MenuItem.component'

const meta: Meta<typeof MenuItem> = {
  title: 'Atoms/Menu Item',
  component: MenuItem,
  tags: ['autodocs'],
  args: { isActive: false, text: 'Text Here!', url: '#' }
}

export default meta

type Story = StoryObj<typeof MenuItem>

export const Default: Story = {}
