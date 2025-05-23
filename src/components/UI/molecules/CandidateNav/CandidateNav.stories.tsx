import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { CandidateNav } from './CandidateNav.component'
import { IconItem, Typography } from '../../atoms'
import { CandidateNavProps } from '../../../../constants/stories'
import { ArrowLeft2, ArrowRight2 } from '../../../../constants/icons.constants'

export const CandidateNavStory = ({ ...props }) => {
  const [count] = useState(CandidateNavProps.candidate.count)

  const handleChange = () => {
    console.log('hola')
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-end'
      }}
    >
      <CandidateNav {...props}>
        <CandidateNav.Options>
          {CandidateNavProps.options.map((option, index) => (
            <CandidateNav.Option
              key={index}
              style={{ display: 'flex', alignItems: 'center', padding: '0 20px', gap: '5px', minHeight: '44px' }}
            >
              <div
                style={{
                  minHeight: 30,
                  minWidth: 30,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#F0F1F3'
                }}
              >
                <IconItem showDefaultFallback={false} size={18} icon={option.icon} />
              </div>
              <Typography.Paragraph size={'md'} weight="normal" color="grey-900">
                {option.value}
              </Typography.Paragraph>
            </CandidateNav.Option>
          ))}
        </CandidateNav.Options>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '8px 33px 0', gap: '8px', width: '100%' }}>
          <CandidateNav.Button variant="red">
            <img style={{ width: '12px', height: '12px', filter: 'invert(1)' }} src={CandidateNavProps.cancelar} />
          </CandidateNav.Button>
          <CandidateNav.Button variant="dark-blue" style={{ flex: 1 }}>
            <Typography.Paragraph size={'lg'} weight="bold" color="grey-50">
              {CandidateNavProps.nextStep.value}
            </Typography.Paragraph>
            <IconItem showDefaultFallback={false} size={20} icon={CandidateNavProps.nextStep.icon} />
          </CandidateNav.Button>
          <CandidateNav.Button toggler variant="gray">
            <IconItem showDefaultFallback={false} size={16} icon={CandidateNavProps.optionIcon} />
          </CandidateNav.Button>
        </div>
        <div style={{ padding: '0 33px', marginTop: '6px' }}>
          <CandidateNav.Step>
            <CandidateNav.Button variant="arrow" onClick={handleChange}>
              <IconItem size={20} icon={ArrowLeft2} />
            </CandidateNav.Button>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <Typography.Text size="md" weight="normal" color="grey-900">
                {CandidateNavProps.candidate.value}
              </Typography.Text>
              <Typography.Text size="md" weight="bold" color="grey-900">
                {count}
              </Typography.Text>
            </div>
            <CandidateNav.Button variant="arrow" onClick={handleChange}>
              <IconItem size={20} icon={ArrowRight2} />
            </CandidateNav.Button>
          </CandidateNav.Step>
        </div>
      </CandidateNav>
    </div>
  )
}

const meta: Meta<typeof CandidateNav> = {
  title: 'Molecules/Candidate Nav',
  render: () => <CandidateNavStory />
}

export default meta

type Story = StoryObj<typeof CandidateNav>

export const Default: Story = {}
