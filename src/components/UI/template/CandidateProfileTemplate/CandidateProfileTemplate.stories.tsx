import React, { Meta, StoryObj } from '@storybook/react'
import { CandidateProfileStory } from '../../molecules/CandidateProfile/CandidateProfile.stories'
import { CandidateProfileTemplate } from './CandidateProfileTemplate.component'
import { candidateProfilePageProps } from '../../../../constants/stories'

const meta: Meta<typeof CandidateProfileTemplate> = {
  title: 'Template/Candidate Profile',
  component: CandidateProfileTemplate,
  args: { ...candidateProfilePageProps }
}

export default meta

type Story = StoryObj<typeof CandidateProfileTemplate>

export const Default: Story = {
  render: () => (
    <CandidateProfileTemplate screens={candidateProfilePageProps.screens}>
      <CandidateProfileTemplate.Header />
      <CandidateProfileTemplate.Profile>
        <CandidateProfileStory />
      </CandidateProfileTemplate.Profile>
      <CandidateProfileTemplate.Screen />
      {/* <CandidateProfileTemplate.Nav /> */}
    </CandidateProfileTemplate>
  )
}
