import { Meta, StoryObj } from '@storybook/react'
import { CandidateRatings } from './candidateRatings.component'

const meta: Meta<typeof CandidateRatings> = {
  title: 'Molecules/Candidate Ratings',
  component: CandidateRatings,
}

export default meta

type Story = StoryObj<typeof CandidateRatings>

export const Default: Story = {}
