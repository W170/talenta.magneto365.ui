import { Meta, StoryObj } from '@storybook/react'
import Notification from './Notification.component'
import { notification } from '../../../../constants/stories'

const meta: Meta<typeof Notification> = {
  title: 'Molecules/Notification',
  component: Notification,
  args: {
    message: notification.message,
    position: notification.position,
    autoCloseDuration: notification.autoCloseDuration,
    className: notification.className
  }
}

export default meta

type Story = StoryObj<typeof Notification>

export const Default: Story = {}
