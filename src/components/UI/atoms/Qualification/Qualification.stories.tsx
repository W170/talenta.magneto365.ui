import { Meta, StoryObj } from '@storybook/react'
import { Qualification } from './Qualification.component'

const meta: Meta<typeof Qualification> = {
  title: 'Atoms/Qualification',
  component: Qualification,
  args: {
    rating: 3
  }
}

export default meta

type Story = StoryObj<typeof Qualification>

export const Default: Story = {}
