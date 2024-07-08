import { Meta, StoryObj } from '@storybook/react'
import { Input } from './'
import { ChangeEvent } from 'react'

const meta: Meta<typeof Input> = {
  title: 'Molecules/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Write something',
    onChange: (e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
    name: 'email',
    value: 'value',
    hideIcon: false,
    type: 'email',
    customIcon: '',
    error: 'Campo requerido',
    disabled: false,
    hasCounter: true,
    maxCounterValue: 2600
  }
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}
