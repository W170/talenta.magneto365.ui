import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { HeaderAnalystProps } from '@constants/stories/analyst.constants'
import { HeaderAnalyst } from './HeaderAnalyst.component'
import { Notification } from '@constants/icons.constants'
import { Link } from '@components/UI/atoms'

const meta: Meta<typeof HeaderAnalyst> = {
  title: 'Organism/Header Analyst',
  component: HeaderAnalyst,
  args: {
    onMainMenuClick: () => {
      console.log('click')
    },
    ...HeaderAnalystProps,
    notificationBell: <Link iconProps={{ icon: Notification, size: 20 }} />
  }
}

export default meta

type Story = StoryObj<typeof HeaderAnalyst>

export const Default: Story = {}
