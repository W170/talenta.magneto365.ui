import { Meta, StoryObj } from '@storybook/react'
import { LoginTemplate } from './LoginTemplate.component'
import {
  AvatarProps,
  BreadcrumbsProps,
  CurriculumTabProps,
  JobsTabsProps,
  ProcessTabsProps,
  listMenuProps,
  listMenuUserProps
} from '../../../../constants/stories.constants'

const meta: Meta<typeof LoginTemplate> = {
  title: 'Template/Login',
  component: LoginTemplate,
  tags: ['autodocs'],
  args: {
    listMenuProps,
    listMenuUserProps,
    breadcrumbsProps: BreadcrumbsProps,
    profileImage: AvatarProps,
    jobsTabsProps: JobsTabsProps,
    processTabsProps: ProcessTabsProps,
    curriculumTabProps: CurriculumTabProps
  }
}

export default meta

type Story = StoryObj<typeof LoginTemplate>

export const Default: Story = {}
