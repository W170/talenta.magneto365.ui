import { Meta, StoryObj } from '@storybook/react'
import { NavMenuAnalystProps } from '@constants/stories'
import { NavMenuAnalyst } from './NavMenuAnalyst.component'

const meta: Meta<typeof NavMenuAnalyst> = {
  title: 'Organism/Nav Menu Analyst',
  component: NavMenuAnalyst,
  args: {
    isFullWidth: false,
    onDropdownClick: () => {
      console.log('clicked')
    },
    ...NavMenuAnalystProps
  }
}

export default meta

type Story = StoryObj<typeof NavMenuAnalyst>

export const Default: Story = {}
