import { Meta, StoryObj } from '@storybook/react'
import { CandidateNavigationBar } from './candidateNavigationBar.component'
import { ICandidateBarProps } from './../../../../constants/stories/CandidateNavigationBar'
const meta: Meta<typeof CandidateNavigationBar> = {
  title: 'Molecules/Candidate Navigation Bar',
  component: CandidateNavigationBar,
  args: {
    ...ICandidateBarProps
  }
}

export default meta

type Story = StoryObj<typeof CandidateNavigationBar>

export const Default: Story = {}
