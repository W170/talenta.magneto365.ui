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
    text: 'This is a sample message',
    type: undefined,
    duration: 4000
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
