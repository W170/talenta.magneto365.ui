import { Meta, StoryObj } from '@storybook/react'
import { HeaderTab } from './HeaderTab.component'

const meta: Meta<typeof HeaderTab> = {
  title: 'Atoms/Header Tab',
  component: HeaderTab,
  args: {
    tabType: 'tabTitle',
    url: '#',
    tabText: 'Empleos:'
  }
}

export default meta

type Story = StoryObj<typeof HeaderTab>

export const Default: Story = {}

export const TabOption: Story = {
  args: {
    tabType: 'tabOption',
    url: '#',
    tabText: 'Sugeridos'
  }
}
