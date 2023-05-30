import { Meta, StoryObj } from '@storybook/react'
import { HeaderDrawerTabs } from './HeaderDrawerTabs.components'
import { TabButtonJobs, TabButtonRecruiter, logoProps } from '../../../../constants/stories.constants'

const meta: Meta<typeof HeaderDrawerTabs> = {
  title: 'Molecules/Header Drawer Tabs',
  component: HeaderDrawerTabs,
  args: {
    tabProps: {
      tabButtonJobs: TabButtonJobs,
      tabButtonRecruiter: TabButtonRecruiter
    },
    logoProps: logoProps
  }
}

export default meta

type Story = StoryObj<typeof HeaderDrawerTabs>

export const Default: Story = {}
