import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SortBar from './SortBar.component'
import { sortBarProps } from '@constants'

const meta: Meta<typeof SortBar> = {
  title: 'Template/Sort Bar',
  component: SortBar,
  tags: ['autodocs'],
  args: sortBarProps,
  decorators: [
    (Story) => (
      <div style={{ margin: '-16px' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof SortBar>

export const Default: Story = {}
