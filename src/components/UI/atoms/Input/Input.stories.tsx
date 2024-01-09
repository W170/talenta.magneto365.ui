import { Meta, StoryObj } from '@storybook/react'
import { Input } from './'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Write something',
    onChange: (e) => e.target.value,
    name: 'email',
    value: 'value',
    hideIcon: false,
    type: 'email',
    customIcon: ''
  }
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}
