import { Meta, StoryObj } from '@storybook/react'
import { InputPlus } from './InputPlus.component'

const meta: Meta<typeof InputPlus> = {
  title: 'Molecules/InputPlus',
  component: InputPlus,
  tags: ['autodocs'],
  args: {
    maxWords: 4,
    disabled: false,
    isLoading: false,
    onChange: (value) => console.log(value),
    placeholder: 'Input plus demo'
  }
}

export default meta

type Story = StoryObj<typeof InputPlus>

export const Default: Story = {}
