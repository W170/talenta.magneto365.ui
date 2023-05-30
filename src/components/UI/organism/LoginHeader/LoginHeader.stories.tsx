import { LoginHeader } from './LoginHeader.component'
import { Meta, StoryObj } from '@storybook/react'
import { AvatarProps, BreadcrumbsProps, listMenuUserProps } from '../../../../constants/stories.constants'

const meta: Meta<typeof LoginHeader> = {
  title: 'Organism/Login Header',
  component: LoginHeader,
  args: {
    listMenuUserProps,
    breadcrumbsProps: BreadcrumbsProps,
    profileImage: AvatarProps
  }
}

export default meta

type Story = StoryObj<typeof LoginHeader>

export const Default: Story = {}
