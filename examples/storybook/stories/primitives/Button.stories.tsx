import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@magneto365-ui/primitives/Button'

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default Button'
  }
}

