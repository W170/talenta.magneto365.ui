import { Meta, StoryObj } from '@storybook/react'
import { JobCardDesktop } from '.'
import { vacancies } from '@constants/stories'

const meta: Meta<typeof JobCardDesktop> = {
  title: 'Molecules/Job Card Desktop',
  component: JobCardDesktop,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
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
    // not used for now.
    //workSeen: 'was-seen'
  }
}

export const IsCompanyPage: Story = {
  args: {
    isCompanyPage: true
  }
}

export const UrgentMobile: Story = {
  args: {
    urgent: '¡Urgente!'
  }
}

export const NoUrgent: Story = {
  args: {
    urgent: undefined
  }
}
