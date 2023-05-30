import { Meta, StoryObj } from '@storybook/react'
import { LogoutHeader } from './LogoutHeader.component'
import {
  BreadcrumbsProps,
  SearchbarProps,
  SignUpButtonProps,
  TabButtonJobs,
  TabButtonRecruiter
} from '../../../../constants/stories.constants'

const meta: Meta<typeof LogoutHeader> = {
  title: 'Organism/Logout Header',
  component: LogoutHeader,
  args: {
    tabButtonJobs: TabButtonJobs,
    tabButtonRecruiter: TabButtonRecruiter,
    searchbarProps: SearchbarProps,
    signUpButtonProps: SignUpButtonProps,
    breadcrumbsProps: BreadcrumbsProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
