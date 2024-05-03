import { HeaderAnalystProps } from '@constants/stories'
import { Meta, StoryObj } from '@storybook/react'
import { HeaderAnalyst } from './HeaderAnalyst.component'

const meta: Meta<typeof HeaderAnalyst> = {
  title: 'Organism/Header Analyst',
  component: HeaderAnalyst,
  args: {
    onMainMenuClick: () => {
      console.log('click')
    },
    ...HeaderAnalystProps
  }
}

export default meta

type Story = StoryObj<typeof HeaderAnalyst>

export const Default: Story = {}
