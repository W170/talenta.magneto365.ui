import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { IMessageProps } from './Message.interface'
import { Message } from './Message.component'

const MessageSample: React.FC<IMessageProps> = (props) => {
  const [visible, setVisible] = useState<boolean>(false)

  const handleClick = (localVisible: boolean) => {
    setVisible(localVisible)
  }

  return (
    <React.Fragment>
      <Message {...props} onHide={handleClick} visible={visible} />
      <button onClick={() => handleClick(true)}>Message</button>
    </React.Fragment>
  )
}

const meta: Meta<typeof MessageSample> = {
  title: 'Molecules/Message',
  component: MessageSample,
  args: {
    text: 'Info.',
    description: 'Description.',
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
    text: 'Success message.',
    type: 'success',
    duration: 4000
  }
}
export const Warning: Story = {
  args: {
    text: 'Warning message.',
    type: 'warning',
    duration: 2000
  }
}
export const Error: Story = {
  args: {
    text: 'Error message.',
    type: 'error',
    duration: 1500
  }
}
