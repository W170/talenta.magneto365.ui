import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { UserMenuAnalystProps } from '@constants/stories'
import { UserMenuDropdownAnalyst } from './UserMenuDropdownAnalyst.component'

const meta: Meta<typeof UserMenuDropdownAnalyst> = {
  title: 'Molecules/User Menu Dropdown Analyst',
  component: UserMenuDropdownAnalyst,
  args: { ...UserMenuAnalystProps },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#00162D', padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof UserMenuDropdownAnalyst>

export const Default: Story = {}
