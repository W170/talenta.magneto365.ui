import { Meta, StoryObj } from '@storybook/react'
import { ScoreLevelStatic } from './ScoreLevelStatic.component'
import { scoreProps } from '../../../../constants/stories/scoreLevel.constants'

const meta: Meta<typeof ScoreLevelStatic> = {
  title: 'Molecules/Score Level Static',
  component: ScoreLevelStatic,
  args: {
    ...scoreProps
  }
}

export default meta

type Story = StoryObj<typeof ScoreLevelStatic>

export const Default: Story = {}
