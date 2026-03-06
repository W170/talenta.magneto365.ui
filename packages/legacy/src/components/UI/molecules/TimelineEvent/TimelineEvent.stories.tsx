import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { TimelineEvent } from './TimelineEvent.component'

const meta: Meta<typeof TimelineEvent> = {
  title: 'Molecules/TimelineEvent',
  component: TimelineEvent
}

export default meta

type Story = StoryObj<typeof TimelineEvent>

export const Default: Story = {
  args: {
    title: 'Nivel 1',
    subtitle: 'Preferencias de empleo',
    status: 'checked'
  },
  render: (args) => <TimelineEvent {...args} />
}
