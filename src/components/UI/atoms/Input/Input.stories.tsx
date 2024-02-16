import { Meta, StoryObj } from '@storybook/react'
import { Input } from './'
import { ChangeEvent } from 'react'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Write something',
    onChange: (e: ChangeEvent<HTMLInputElement>) => e.target.value,
    name: 'email',
    value: 'value',
    hideIcon: false,
    type: 'email',
    customIcon: '',
    error: 'Campo requerido',
    disabled: false
  }
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}
