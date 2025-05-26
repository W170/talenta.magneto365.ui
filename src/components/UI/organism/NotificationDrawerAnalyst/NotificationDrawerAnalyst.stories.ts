import { Meta, StoryObj } from '@storybook/react'
import { NotificationDrawerAnalyst } from './NotificationDrawerAnalyst.component'
import { NotificationDrawerAnalystProps } from '@constants/stories/analyst.constants'

const meta: Meta<typeof NotificationDrawerAnalyst> = {
  title: 'Organism/Notification Drawer Analyst',
  component: NotificationDrawerAnalyst,
  args: { ...NotificationDrawerAnalystProps }
}

export default meta

type Story = StoryObj<typeof NotificationDrawerAnalyst>
export const Default: Story = {}
