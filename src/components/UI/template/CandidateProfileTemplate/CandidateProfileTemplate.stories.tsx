import React, { Meta, StoryObj } from '@storybook/react'
import { CandidateProfileStory } from '../../molecules/CandidateProfile/CandidateProfile.stories'
import { CandidateNavStory } from '../../molecules/CandidateNav/CandidateNav.stories'
import { CandidateProfileTemplate } from './CandidateProfileTemplate.component'
import { candidateProfileTemplateProps } from '../../../../constants/stories'
import { LinkDark } from '../../../../constants/icons.constants'
import { IconItem } from '../../atoms'

const meta: Meta<typeof CandidateProfileTemplate> = {
  title: 'Template/Candidate Profile',
  component: CandidateProfileTemplate
}

export default meta

type Story = StoryObj<typeof CandidateProfileTemplate>

export const Default: Story = {
  render: () => (
    <CandidateProfileTemplate
      screens={[
        {
          ...candidateProfileTemplateProps,
          component: () => <div style={{ height: '200vh', background: 'gray' }}></div>,
          icon: <IconItem icon={LinkDark} />
        }
      ]}
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
