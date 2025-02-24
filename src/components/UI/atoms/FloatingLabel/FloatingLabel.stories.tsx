import React, { ChangeEvent } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { FloatingLabel } from './FloatingLabel.component'
import { Input } from '@components/UI/atoms'

const meta: Meta<typeof FloatingLabel> = {
  title: 'Atoms/ FloatingLabel',
  component: FloatingLabel,
  args: {
    label: 'Escribe tu fecha de nacimiento',
    value: '',
    children: (
      <Input value="" onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.value} type="email" placeholder="" />
    )
  }
}

export default meta

type Story = StoryObj<typeof FloatingLabel>

export const Default: Story = {}
