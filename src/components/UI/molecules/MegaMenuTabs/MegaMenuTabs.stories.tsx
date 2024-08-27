import { StoryObj, Meta } from '@storybook/react'
import MegaMenuTabs from './MegaMenuTabs.component'
import { megaMenuTabs } from '@constants/stories'

const meta: Meta<typeof MegaMenuTabs> = {
  title: 'Molecules/Mega Menu Tabs',
  component: MegaMenuTabs,
  args: {
    tabs: megaMenuTabs
  }
}

export default meta

type Story = StoryObj<typeof MegaMenuTabs>

export const Default: Story = {}
