import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { CandidateComments } from './candidateComments.component'

export const CandidateCommetsOne: React.FC = () => (
  <CandidateComments
    data={[
      {
        src: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        name: 'Andrés Zapata',
        rating: 3,
        date: '2024-02-26T12:00:00Z',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
      }
    ]}
  />
)

export const CandidateCommetsTwo: React.FC = () => (
  <div style={{ margin: '8px', padding: '5px' }}>
    <CandidateComments>
      <div style={{ display: 'flex', alignItems: 'Center', gap: '5px' }}>
        <CandidateComments.Avatar src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <div>
          <CandidateComments.Name name="Juan Martines" />
          <CandidateComments.Rating rating={4} />
        </div>
      </div>
      <CandidateComments.Description
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
        }
      />
      <CandidateComments.Date date={new Date()} style={{ textAlign: 'left' }} />
    </CandidateComments>
  </div>
)

const meta: Meta<typeof CandidateComments> = {
  title: 'Molecules/Candidate comments',
  component: CandidateComments
}

export default meta

type Story = StoryObj<typeof CandidateComments>

export const Example_One: Story = {
  render: () => <CandidateCommetsOne />
}

export const Example_Two: Story = {
  render: () => <CandidateCommetsTwo />
}
