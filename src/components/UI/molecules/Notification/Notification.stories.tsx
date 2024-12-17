import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Notification from './Notification.component'

const meta: Meta<typeof Notification> = {
  title: 'Molecules/Notification',
  component: Notification,
  args: {
    title: 'Formularios de solicitud',
    description: 'Formularios de solicitud de vacantes existentes:',
    position: 'top-left',
    containerClassName: '',
    contentClassName: '',
    titleClassName: '',
    descriptionClassName: '',
    autoCloseDuration: 50,
    children: <></>
  }
}

export default meta

type Story = StoryObj<typeof Notification>

export const Default: Story = {}
