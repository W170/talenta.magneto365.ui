import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio.component'

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio
}

export default meta

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: (args) => <Radio {...args}>Texto</Radio>
}

export const RadioButton: Story = {
  args: {
    type: 'button'
  },
  render: (args) => <Radio {...args}>Texto</Radio>
}
