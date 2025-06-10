import React, { Meta, StoryObj } from '@storybook/react'
import { CandidateProfileStory } from '../../molecules/CandidateProfile/CandidateProfile.stories'
import { CandidateNavStory } from '../../molecules/CandidateNav/CandidateNav.stories'
import { CandidateProfileTemplate } from './CandidateProfileTemplate.component'
import { candidateProfileTemplateProps } from '../../../../constants/stories'
import { LinkDark, ArrowLeft2 } from '../../../../constants/icons.constants'
import { IconItem, Typography } from '../../atoms'

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
        },
        {
          ...candidateProfileTemplateProps,
          component: () => <div style={{ height: '200vh', background: 'red' }}></div>,
          icon: <IconItem icon={LinkDark} />
        },
        {
          ...candidateProfileTemplateProps,
          component: () => <div style={{ height: '200vh', background: 'yellow' }}></div>,
          icon: <IconItem icon={LinkDark} />
        }
      ]}
      onChangeScreen={(screen, index) => console.log(screen, index)}
    >
      <CandidateProfileTemplate.Header>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            minHeight: '50px',
            paddingBlock: '10px',
            paddingInline: '12px'
          }}
        >
          <IconItem icon={ArrowLeft2} />
          <Typography.Text weight="bold" size="lg" color="grey-800">
            Perfil del candidato
          </Typography.Text>
        </div>
        <CandidateProfileTemplate.MainNav />
      </CandidateProfileTemplate.Header>
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
