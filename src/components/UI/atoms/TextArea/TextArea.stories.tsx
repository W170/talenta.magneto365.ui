import { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent } from 'react'
import { TextArea } from './'

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Write something',
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => e.target.value,
    name: 'text-area',
    value: 'Text area value',
    error: 'Campo requerido',
    disabled: false
  }
}

export default meta

type Story = StoryObj<typeof TextArea>

export const Default: Story = {}
