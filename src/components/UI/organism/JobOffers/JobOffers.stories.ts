import { Meta, StoryObj } from '@storybook/react'
import { JobOffers } from './'

const meta: Meta<typeof JobOffers> = {
  title: 'Organism/Job Offers',
  component: JobOffers,
  tags: ['autodocs'],
  args: {}
}

export default meta

type Story = StoryObj<typeof JobOffers>

export const Default: Story = {}
