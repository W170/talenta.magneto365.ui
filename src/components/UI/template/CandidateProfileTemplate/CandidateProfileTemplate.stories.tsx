import React, { Meta, StoryObj } from '@storybook/react'
import { CandidateProfileStory } from '../../molecules/CandidateProfile/CandidateProfile.stories'
import { CandidateNavStory } from '../../molecules/CandidateNav/CandidateNav.stories'
import { CandidateProfileTemplate } from './CandidateProfileTemplate.component'

const candidateProfilePageProps = {
  screens: [
    {
      name: 'candidateOverview',
      icon: 'users',
      component: () => <div style={{ height: '200vh', background: 'gray' }}></div>,
      title: 'Perfil de candidato'
    }
  ]
}

const meta: Meta<typeof CandidateProfileTemplate> = {
  title: 'Template/Candidate Profile',
  component: CandidateProfileTemplate,
  args: { ...candidateProfilePageProps }
}

export default meta

type Story = StoryObj<typeof CandidateProfileTemplate>

export const Default: Story = {
  render: () => (
    <CandidateProfileTemplate
      screens={candidateProfilePageProps.screens}
      onChangeScreen={(screen, index) => console.log(screen, index)}
    >
      <CandidateProfileTemplate.Header />
      <CandidateProfileTemplate.Profile>
        <CandidateProfileStory />
      </CandidateProfileTemplate.Profile>
      <CandidateProfileTemplate.Screen test={'test'} />
      <CandidateProfileTemplate.Nav>
        <CandidateNavStory />
      </CandidateProfileTemplate.Nav>
    </CandidateProfileTemplate>
  )
}
