import { Meta, StoryObj } from '@storybook/react'
import { LogoutTemplate } from './LogoutTemplate.component'
import { listMenuProps } from '../../../../constants/stories.constants'

const meta: Meta<typeof LogoutTemplate> = {
  title: 'Template/Logout',
  component: LogoutTemplate,
  tags: ['autodocs'],
  args: {
    listMenuProps: listMenuProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutTemplate>

export const Default: Story = {}
