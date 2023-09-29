import { Meta, StoryObj } from '@storybook/react'
import { JobCardDesktop } from '.'
import { vacancies } from '@constants/stories'

const meta: Meta<typeof JobCardDesktop> = {
  title: 'Molecules/Job Card Desktop',
  component: JobCardDesktop,
  tags: ['autodocs'],
  args: {
    ...vacancies[2]
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
