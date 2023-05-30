import { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tab.component'

import { TabButtonJobs, TabButtonRecruiter } from '../../../../constants/stories.constants'

const meta: Meta<typeof Tab> = {
  title: 'Molecules/Tab',
  component: Tab,
  args: {
    tabButtonJobs: TabButtonJobs,
    tabButtonRecruiter: TabButtonRecruiter
  }
}

export default meta

type Story = StoryObj<typeof Tab>

export const Default: Story = {}
