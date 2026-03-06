import { Meta, StoryObj } from '@storybook/react'
import { ScoreLevel } from './ScoreLevel.component'
import { scoreProps } from '../../../../constants/stories/scoreLevel.constants'

const meta: Meta<typeof ScoreLevel> = {
  title: 'Molecules/Score Level',
  component: ScoreLevel,
  args: {
    ...scoreProps
  }
}

export default meta

type Story = StoryObj<typeof ScoreLevel>

export const Default: Story = {}
