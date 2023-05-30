import { Meta, StoryObj } from '@storybook/react'
import { LogoutTemplate } from './LogoutTemplate.component'
import {
  listMenuProps,
  SearchbarProps,
  SignUpButtonProps,
  BreadcrumbsProps,
  TabButtonJobs,
  TabButtonRecruiter,
  SignInLinkProps
} from '../../../../constants/stories.constants'

const meta: Meta<typeof LogoutTemplate> = {
  title: 'Template/Logout',
  component: LogoutTemplate,
  tags: ['autodocs'],
  args: {
    logoutHeaderProps: {
      tabButtonJobs: TabButtonJobs,
      tabButtonRecruiter: TabButtonRecruiter,
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
