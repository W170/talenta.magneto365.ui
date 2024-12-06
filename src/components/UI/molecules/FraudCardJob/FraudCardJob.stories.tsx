import { Meta, StoryObj } from '@storybook/react'
import { FraudCardJob } from './FraudCardJob.component'
import { fraudCardJob } from '../../../../constants/stories/fraudCardJob.constant'

const meta: Meta<typeof FraudCardJob> = {
  title: 'Molecules/Fraud Card Job',
  component: FraudCardJob,
  args: {
    ...fraudCardJob
  }
}

export default meta

type Story = StoryObj<typeof FraudCardJob>

export const Default: Story = {}
