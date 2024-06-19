import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { Timeline } from './Timeline.component'

const meta: Meta<typeof Timeline> = {
  title: 'Organism/Timeline',
  component: Timeline
}

export default meta

type Story = StoryObj<typeof Timeline>

export const Default: Story = {
  args: {
    currentStep: 1,
    steps: [
      {
        title: 'Nivel 1',
        subtitle: 'Preferencias de empleo'
      },
      {
        title: 'Nivel 2',
        subtitle: 'Hazte visible y aplica a empleos'
      },
      {
        title: 'Nivel 3',
        subtitle: 'Haz que tu perfil destaque'
      },
      {
        title: 'Nivel 4',
        subtitle: 'Entra en los candidatos TOP'
      }
    ]
  },
  render: (args) => <Timeline {...args} />
}
