import { Meta, StoryObj } from '@storybook/react'
import { candidateOverviewProps } from '@constants/stories'
import { CandidateOverview } from './CandidateOverview.component'

const meta: Meta<typeof CandidateOverview> = {
  title: 'Molecules/Candidate Overview',
  component: CandidateOverview,
  args: { ...candidateOverviewProps }
}

export default meta

type Story = StoryObj<typeof CandidateOverview>

export const Default: Story = {}
