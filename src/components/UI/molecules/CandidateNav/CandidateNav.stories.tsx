import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { CandidateNav } from './CandidateNav.component'
import { ECandidateNavButtonVariant } from './children'
import { IconItem, Typography } from '../../atoms'
import { CandidateNavProps } from '../../../../constants/stories'

export const CandidateNavStory: React.FC = () => {
  const [count, setCount] = useState(CandidateNavProps.candidate.count)

  const handleChange = (newCount: number) => {
    setCount(newCount)
  }

  return (
    <CandidateNav>
      <CandidateNav.Options>
        {CandidateNavProps.options.map((option, index) => (
          <CandidateNav.Option key={index}>
            <CandidateNav.Button variant={ECandidateNavButtonVariant.LEFT}>
              <IconItem showDefaultFallback={false} size={18} icon={option.icon} />
              <Typography.Paragraph size={'md'} weight="normal" color="gray">
                {option.value}
              </Typography.Paragraph>
            </CandidateNav.Button>
          </CandidateNav.Option>
        ))}
      </CandidateNav.Options>
      <div style={{ display: 'flex', flexDirection: 'row', padding: '8px 33px ', gap: '8px', width: '100%' }}>
        <CandidateNav.Button variant={ECandidateNavButtonVariant.RED}>
          <IconItem showDefaultFallback={false} size={16} icon={CandidateNavProps.cancelar} />
        </CandidateNav.Button>
        <CandidateNav.Button variant={ECandidateNavButtonVariant.DARK_BLUE} style={{ flex: 1 }}>
          <Typography.Paragraph size={'lg'} weight="bold" color="white">
            {CandidateNavProps.nextStep.value}
          </Typography.Paragraph>
          <IconItem showDefaultFallback={false} size={20} icon={CandidateNavProps.nextStep.icon} />
        </CandidateNav.Button>
        <CandidateNav.Button toggler={true} variant={ECandidateNavButtonVariant.GRAY}>
          <IconItem showDefaultFallback={false} size={16} icon={CandidateNavProps.optionIcon} />
        </CandidateNav.Button>
      </div>
      <div style={{ padding: '0 33px', marginTop: '6px' }}>
        <CandidateNav.Step onChange={handleChange} count={count}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <Typography.Text size={'sm'} weight="normal" color="black">
              {CandidateNavProps.candidate.value}
            </Typography.Text>
            <Typography.Text size={'sm'} weight="bold" color="black">
              {count}
            </Typography.Text>
          </div>
        </CandidateNav.Step>
      </div>
    </CandidateNav>
  )
}
const meta: Meta<typeof CandidateNav> = {
  title: 'Molecules/Candidate Nav',
  component: CandidateNav,
  render: () => <CandidateNavStory />
}

export default meta

type Story = StoryObj<typeof CandidateNav>

export const Default: Story = {}

export const Catalogue: Story = {
  render: () => (
    <CandidateNav>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '8px 33px ',
          gap: '8px',
          width: '100%',
          justifyContent: 'center'
        }}
      >
        <CandidateNav.Button variant={ECandidateNavButtonVariant.RED}>
          <IconItem showDefaultFallback={false} size={16} icon={CandidateNavProps.block} />
        </CandidateNav.Button>
        <CandidateNav.Button variant={ECandidateNavButtonVariant.DARK_BLUE}>
          <Typography.Paragraph size={'lg'} weight="bold" color="white">
            {CandidateNavProps.sendVacant.value}
          </Typography.Paragraph>
          <IconItem showDefaultFallback={false} size={20} icon={CandidateNavProps.sendVacant.icon} />
        </CandidateNav.Button>
      </div>
      <div style={{ padding: '0 33px', marginTop: '6px' }}>
        <CandidateNav.Step count={CandidateNavProps.candidate.count}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <Typography.Text size={'sm'} weight="normal" color="black">
              {CandidateNavProps.candidate.value}
            </Typography.Text>
            <Typography.Text size={'sm'} weight="bold" color="black">
              {CandidateNavProps.candidate.count}
            </Typography.Text>
          </div>
        </CandidateNav.Step>
      </div>
    </CandidateNav>
  )
}

export const AI: Story = {
  render: () => (
    <CandidateNav>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '8px 33px ',
          gap: '8px',
          width: '100%',
          justifyContent: 'center'
        }}
      >
        <CandidateNav.Button variant={ECandidateNavButtonVariant.GRAY}>
          <IconItem showDefaultFallback={false} size={16} icon={CandidateNavProps.shareIcon} />
        </CandidateNav.Button>
        <CandidateNav.Button variant={ECandidateNavButtonVariant.DARK_BLUE}>
          <Typography.Paragraph size={'lg'} weight="bold" color="white">
            {CandidateNavProps.inviteAi.value}
          </Typography.Paragraph>
          <IconItem showDefaultFallback={false} size={20} icon={CandidateNavProps.inviteAi.icon} />
        </CandidateNav.Button>
      </div>
      <div style={{ padding: '0 33px', marginTop: '6px' }}>
        <CandidateNav.Step count={CandidateNavProps.candidate.count}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <Typography.Text size={'sm'} weight="normal" color="black">
              {CandidateNavProps.candidate.value}
            </Typography.Text>
            <Typography.Text size={'sm'} weight="bold" color="black">
              {CandidateNavProps.candidate.count}
            </Typography.Text>
          </div>
        </CandidateNav.Step>
      </div>
    </CandidateNav>
  )
}
