import { Meta, StoryObj } from '@storybook/react'
import { JobCard } from './'
const meta: Meta<typeof JobCard> = {
  title: 'Molecules/Job Card',
  component: JobCard,
  tags: ['autodocs'],
  args: {}
}

export default meta

type Story = StoryObj<typeof JobCard>

export const Default: Story = {}
