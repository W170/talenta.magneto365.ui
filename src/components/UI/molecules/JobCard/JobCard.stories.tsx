import { Meta, StoryObj } from '@storybook/react'
import { JobCard } from './'
import { vacants } from '../../../../constants/stories.constants'

const meta: Meta<typeof JobCard> = {
  title: 'Molecules/Job Card',
  component: JobCard,
  tags: ['autodocs'],
  args: {
    isLoading: false,
    ...vacants[1]
  }
}

export default meta

type Story = StoryObj<typeof JobCard>

export const Default: Story = {}
