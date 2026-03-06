import { Meta, StoryObj } from '@storybook/react'
import { ComparativeCounter } from './ComparativeCounter.component'

const meta: Meta<typeof ComparativeCounter> = {
  title: 'Atoms/Comparative Counter',
  component: ComparativeCounter,
  args: {
    max: 125,
    current: 10,
    position: 'center'
  }
}

export default meta

type Story = StoryObj<typeof ComparativeCounter>

export const Default: Story = {}
