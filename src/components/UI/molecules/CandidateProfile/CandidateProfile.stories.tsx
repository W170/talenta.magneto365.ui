import { Meta, StoryObj } from '@storybook/react'
import { CandidateProfile } from './CandidateProfile.component'
import { candidateProfile } from '@constants/stories'

const meta: Meta<typeof CandidateProfile> = {
  title: 'Molecules/Candidate Profile',
  component: CandidateProfile,
  args: {
    ...candidateProfile
  }
}

export default meta

type Story = StoryObj<typeof CandidateProfile>

export const Default: Story = {}
