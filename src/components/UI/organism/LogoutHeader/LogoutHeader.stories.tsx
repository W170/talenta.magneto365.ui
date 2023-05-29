import { Meta, StoryObj } from '@storybook/react'
import { LogoutHeader } from './LogoutHeader.component'
import {
  BreadcrumbsProps,
  SearchbarProps,
  SignInLinkProps,
  SignUpButtonProps,
  TabProps
} from '../../../../constants/stories.constants'

const meta: Meta<typeof LogoutHeader> = {
  title: 'Organism/Logout Header',
  component: LogoutHeader,
  args: {
    tabProps: TabProps,
    searchbarProps: SearchbarProps,
    signInLinkProps: SignInLinkProps,
    signUpButtonProps: SignUpButtonProps,
    breadcrumbsProps: BreadcrumbsProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
