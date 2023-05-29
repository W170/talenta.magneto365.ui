import { Meta, StoryObj } from '@storybook/react'
import { LogoutTemplate } from './LogoutTemplate.component'
import {
  listMenuProps,
  TabProps,
  SearchbarProps,
  SignInLinkProps,
  SignUpButtonProps,
  BreadcrumbsProps
} from '../../../../constants/stories.constants'

const meta: Meta<typeof LogoutTemplate> = {
  title: 'Template/Logout',
  component: LogoutTemplate,
  tags: ['autodocs'],
  args: {
    logoutHeaderProps: {
      tabProps: TabProps,
      searchbarProps: SearchbarProps,
      signInLinkProps: SignInLinkProps,
      signUpButtonProps: SignUpButtonProps,
      breadcrumbsProps: BreadcrumbsProps
    },
    listMenuProps: listMenuProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutTemplate>

export const Default: Story = {}
