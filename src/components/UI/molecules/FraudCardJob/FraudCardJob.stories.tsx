import { Meta, StoryObj } from '@storybook/react'
import { FraudCardJob } from './FraudCardJob.component'

const meta: Meta<typeof FraudCardJob> = {
  title: 'Molecules/Fraud Card Job',
  component: FraudCardJob,
  args: {}
}

export default meta

type Story = StoryObj<typeof FraudCardJob>

export const Default: Story = {}
