import { Meta, StoryObj } from '@storybook/react'
import { JobCardDesktop } from '.'
import { vacants } from '../../../../constants/stories.constants'

const meta: Meta<typeof JobCardDesktop> = {
  title: 'Molecules/Job Card Desktop',
  component: JobCardDesktop,
  tags: ['autodocs'],
  args: {
    ...vacants[2]
  }
}

export default meta

type Story = StoryObj<typeof JobCardDesktop>

export const Default: Story = {}

export const IsActive: Story = {
  args: {
    jobOpen: 'is-active'
  }
}

export const WasSeen: Story = {
  args: {
    workSeen: 'was-seen'
  }
}

export const IsCompanyPage: Story = {
  args: {
    isCompanyPage: true
  }
}
