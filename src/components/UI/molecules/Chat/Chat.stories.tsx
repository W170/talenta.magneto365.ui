import React, { ComponentType } from 'react';
import { Chat } from './Chat.component'
import { StoryObj, Meta } from '@storybook/react'
import { isRef } from '@utils/react';

const meta: Meta<typeof Chat> = {
  title: 'Molecules/Chat',
  component: Chat,
  parameters: {
    docs: {
      autoplay: true,
    },
  },
} satisfies Meta<typeof Chat>;

export default meta

type Story = StoryObj<typeof Chat>

export const Message: Story = {
  args: {
    ref: React.createRef(),
    children: ({ messages }) => messages.map((msg) => (<Chat.Message role={msg.sender} key={msg.id} to={msg.sender === 'bot' ? 'left' : 'right'}>
      {msg.content}
    </Chat.Message>))
  },
  play: async ({ args, }) => {
    if (isRef(args.ref)) {
      args.ref.current?.pushMessage({ id: '1', content: 'Hello World', sender: 'bot', type: 'text' })
      args.ref.current?.pushMessage({ id: '2', content: 'Hi!', sender: 'user', type: 'text' })
    }
  }
}

export const Dots: Story = {
  args: {
    children: () => <Chat.LoadingDots />,
  },
}

