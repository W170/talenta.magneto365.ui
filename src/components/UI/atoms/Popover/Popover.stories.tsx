import React from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { Popover } from './Popover.component'

const meta: Meta<typeof Popover> = {
  title: 'Atoms/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    content: <p>Im the content</p>,
    positionX: 'right',
    positionY: 'bottom',
    width: 200,
    show: false,
    children: <button style={{ display: 'block', width: '100px', height: '60px' }}>Hi</button>
  }
}

export default meta

type Story = StoryObj<typeof Popover>

export const Default: Story = {}
