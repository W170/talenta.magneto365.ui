import React, { FC } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { message } from './Message.component'
import { IMessage } from './Message.interface'

const MessageSample: FC<IMessage> = (props) => {
  return <button onClick={() => message(props)}>Open message</button>
}

const meta: Meta<typeof MessageSample> = {
  title: 'Molecules/Message',
  component: MessageSample,
  args: {
    text: 'This is a sample info message',
    type: 'info',
    duration: 3000
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof MessageSample>

export const Default: Story = {}

export const Success: Story = {
  args: {
    text: 'Success message',
    type: 'success',
    duration: 4000
  }
}
export const Warning: Story = {
  args: {
    text: 'Warning message',
    type: 'warning',
    duration: 2000
  }
}
export const Error: Story = {
  args: {
    text: 'Error message',
    type: 'error',
    duration: 1500
  }
}
