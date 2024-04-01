import { Meta, StoryObj } from '@storybook/react'
import Swipe from './Swipe.component'

const meta: Meta<typeof Swipe> = {
  title: 'Organism/Swipe',
  component: Swipe,
  tags: ['autodocs'],
  args: {}
}

export default meta

type Story = StoryObj<typeof Swipe>

export const Default: Story = {}
