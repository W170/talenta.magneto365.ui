import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { UserMenuAnalystProps } from '@constants/stories/analyst.constants'
import { UserMenuWrapperAnalyst } from './UserMenuWrapperAnalyst.component'

const meta: Meta<typeof UserMenuWrapperAnalyst> = {
  title: 'Molecules/User Menu Wrapper Analyst',
  component: UserMenuWrapperAnalyst,
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

type Story = StoryObj<typeof UserMenuWrapperAnalyst>

export const Default: Story = {}
