import { Meta, StoryObj } from '@storybook/react'
import { NavMenuAnalystProps } from '@constants/stories/analyst.constants'
import { NavMenuDrawerAnalyst } from './NavMenuDrawerAnalyst.component'

const meta: Meta<typeof NavMenuDrawerAnalyst> = {
  title: 'Organism/Nav Menu Drawer Analyst',
  component: NavMenuDrawerAnalyst,
  args: { isDrawerOpen: false, ...NavMenuAnalystProps }
}

export default meta

type Story = StoryObj<typeof NavMenuDrawerAnalyst>

export const Default: Story = {}
