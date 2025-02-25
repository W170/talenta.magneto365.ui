import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { candidateProfileProps, expandableInfoProps } from '../../../../constants/stories'
import { CandidateProfile } from './CandidateProfile.component'
import { IconItem, Typography } from '../../atoms'
import { ExpandableInfo } from '../../molecules'

export const CandidateProfileStory: React.FC = () => (
  <CandidateProfile>
    <CandidateProfile.Header>
      <CandidateProfile.Avatar avatar={candidateProfileProps.avatar} score={candidateProfileProps.score} />
      <div>
        <Typography.Paragraph size={'xs'} weight="normal" color="gray">
          {candidateProfileProps.header.lastUpdate}
        </Typography.Paragraph>
        <Typography.Title level={3} size="lg" weight="black" color="white">
          {candidateProfileProps.header.name}
        </Typography.Title>
        <Typography.Title level={3} size="lg" weight="normal" color="white">
          {candidateProfileProps.header.lastName}
        </Typography.Title>
        <Typography.Title level={4} size="lg" weight="normal" color="green">
          {candidateProfileProps.header.role}
        </Typography.Title>
      </div>
      <CandidateProfile.Toggler style={{ marginLeft: 'auto' }} />
    </CandidateProfile.Header>
    <CandidateProfile.Dropdown>
      <div
        style={{
          padding: '5px',
          backgroundColor: '#1A324C',
          borderRadius: '4px',
          display: 'grid',
          gridTemplateColumns: '15px auto 1fr',
          gap: '5px',
          alignItems: 'center'
        }}
      >
        {candidateProfileProps.internal.map((detail, detailIndex) => (
          <React.Fragment key={`internal-${detailIndex}`}>
            <IconItem showDefaultFallback={false} size={15} icon={detail.icon} />
            <Typography.Text size="xs" weight="normal" color="white">
              {detail.title}
            </Typography.Text>
            <Typography.Text size="xs" weight="black" color="white">
              {detail.value}
            </Typography.Text>
          </React.Fragment>
        ))}
      </div>
      <ExpandableInfo {...expandableInfoProps} variant="blue" />
      <div>
        {candidateProfileProps.details.map((detail, detailIndex) => (
          <div key={detailIndex} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
            <Typography.Title level={4} size="lg" weight="bold" color="green">
              {detail.title}
            </Typography.Title>
            {detail.children.map((child, childIndex) => (
              <div
                key={`${detail.title}-child-${childIndex}`}
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <IconItem showDefaultFallback={false} size={15} icon={child.icon} />
                <Typography.Text size="sm" weight="normal" color={child.color}>
                  {child.value}
                </Typography.Text>
              </div>
            ))}
          </div>
        ))}
      </div>
    </CandidateProfile.Dropdown>
  </CandidateProfile>
)

const meta: Meta<typeof CandidateProfile> = {
  title: 'Molecules/Candidate Profile',
  component: CandidateProfile,
  render: () => <CandidateProfileStory />
}

export default meta

type Story = StoryObj<typeof CandidateProfile>

export const Default: Story = {}
