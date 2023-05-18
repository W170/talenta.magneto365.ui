import { Meta, StoryObj } from '@storybook/react'
import { LogoutTemplate } from './LogoutTemplate.component'
import { createAccount, login, ListIcon, headerProps, listMenuProps } from '../../../../constants/stories.constants'

const meta: Meta<typeof LogoutTemplate> = {
  title: 'Template/Logout',
  component: LogoutTemplate,
  tags: ['autodocs'],
  args: {
    login,
    createAccount,
    listIcon: ListIcon,
    headerProps: headerProps,
    listMenuProps: listMenuProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutTemplate>

export const Default: Story = {}
