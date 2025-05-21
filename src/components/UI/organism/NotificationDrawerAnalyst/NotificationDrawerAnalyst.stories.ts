import { Meta, StoryObj } from '@storybook/react'
import { NotificationDrawerAnalyst } from './NotificationDrawerAnalyst.component'

const meta: Meta<typeof NotificationDrawerAnalyst> = {
  title: 'Organism/Notification Drawer Analyst',
  component: NotificationDrawerAnalyst,
  args: { isDrawerOpen: false }
}

export default meta

type Story = StoryObj<typeof NotificationDrawerAnalyst>
export const Default: Story = {}
