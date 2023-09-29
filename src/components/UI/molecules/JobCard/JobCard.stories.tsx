import { Meta, StoryObj } from '@storybook/react'
import { JobCard } from './'
import { vacancies } from '@constants/stories'

const meta: Meta<typeof JobCard> = {
  title: 'Molecules/Job Card',
  component: JobCard,
  tags: ['autodocs'],
  args: {
    isLoading: false,
    ...vacancies[1]
  }
}

export default meta

type Story = StoryObj<typeof JobCard>

export const Default: Story = {}
