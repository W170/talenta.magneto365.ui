import { Meta, StoryObj } from '@storybook/react'
import { ComparativeCounter } from '@magneto365-ui/inputs/ComparativeCounter'

const meta: Meta<typeof ComparativeCounter> = {
  title: 'Inputs/ComparativeCounter',
  component: ComparativeCounter,
  tags: ['autodocs'],
  args: {
    max: 125,
    current: 10,
    position: 'center'
  },
  argTypes: {
    max: {
      control: 'number',
      description: 'Maximum value for the counter'
    },
    current: {
      control: 'number',
      description: 'Current value of the counter'
    },
    position: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Position alignment of the counter'
    }
  }
}

export default meta

type Story = StoryObj<typeof ComparativeCounter>

export const Default: Story = {}

export const AtMax: Story = {
  args: {
    max: 100,
    current: 100
  }
}

export const OverMax: Story = {
  args: {
    max: 100,
    current: 120
  }
}

export const AlignLeft: Story = {
  args: {
    max: 200,
    current: 50,
    position: 'left'
  }
}

export const AlignRight: Story = {
  args: {
    max: 200,
    current: 50,
    position: 'right'
  }
}
