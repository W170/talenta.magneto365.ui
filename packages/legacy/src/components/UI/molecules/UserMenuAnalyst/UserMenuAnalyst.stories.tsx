import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { UserMenuAnalystProps } from '@constants/stories/analyst.constants'
import { UserMenuAnalyst } from './UserMenuAnalyst.component'

const meta: Meta<typeof UserMenuAnalyst> = {
  title: 'Molecules/User Menu Analyst',
  component: UserMenuAnalyst,
  args: { ...UserMenuAnalystProps },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#001B38', padding: '20px' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof UserMenuAnalyst>

export const Default: Story = {}
