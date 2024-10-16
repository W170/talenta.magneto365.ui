import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { Timeline } from './Timeline.component'
import { timeLineSteps } from '../../../../constants/stories/timeLine.constants'

const meta: Meta<typeof Timeline> = {
  title: 'Organism/Timeline',
  component: Timeline
}

export default meta

type Story = StoryObj<typeof Timeline>

export const Default: Story = {
  args: {
    currentStep: 1,
    steps: timeLineSteps,
    onClick: (status, index) => console.log({ status, index })
  },
  render: (args) => <Timeline {...args} />
}
