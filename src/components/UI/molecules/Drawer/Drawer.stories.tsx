import { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './Drawer.component'

const meta: Meta<typeof Drawer> = {
  title: 'Molecules/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  args: {
    isOpen: true
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {}
