import { Meta, StoryObj } from '@storybook/react'
import { JobCardMobile } from '.'
import { vacancies } from '@constants/stories'

const meta: Meta<typeof JobCardMobile> = {
  title: 'Molecules/Job Card Mobile',
  component: JobCardMobile,
  tags: ['autodocs'],
  args: {
    ...vacancies[0]
  }
}

export default meta

type Story = StoryObj<typeof JobCardMobile>

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
