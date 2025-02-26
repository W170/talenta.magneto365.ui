import { Meta, StoryObj } from '@storybook/react'
import { CandidateComments } from './candidateComments.component'

const meta: Meta<typeof CandidateComments> = {
  title: 'Molecules/Candidate Comments',
  component: CandidateComments,
  args:{
    data:[{
      src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Andrés Zapata",
      rating: 3,
      date: "2024-02-26T12:00:00Z",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
    },
    {
      src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Andrés Zapata",
      rating: 3,
      date: "2024-02-26T12:00:00Z",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
    }
  ]
  }
}

export default meta

type Story = StoryObj<typeof CandidateComments>

export const Default: Story = {}
