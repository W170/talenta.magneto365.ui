import { Meta, StoryObj } from '@storybook/react'
import { UserMenuButtonAnalystProps } from '@constants/stories'
import UserMenuButtonAnalyst from './UserMenuButtonAnalyst.component'

const meta: Meta<typeof UserMenuButtonAnalyst> = {
  title: 'Atoms/User Menu Button Analyst',
  component: UserMenuButtonAnalyst,
  args: { ...UserMenuButtonAnalystProps }
}

export default meta

type Story = StoryObj<typeof UserMenuButtonAnalyst>

export const Default: Story = {}
