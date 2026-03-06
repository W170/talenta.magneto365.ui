import { Meta, StoryObj } from '@storybook/react'
import { LoginTemplate } from './LoginTemplate.component'
import {
  listMenuProps,
  listMenuUserProps,
  AvatarProps,
  JobsTabsProps,
  ProcessTabsProps,
  CurriculumTabProps,
  SearchbarProps,
  MobileSearchbarProps,
  breadcrumbProps
} from '@constants/stories'

const meta: Meta<typeof LoginTemplate> = {
  title: 'Template/Login',
  component: LoginTemplate,
  tags: ['autodocs'],
  args: {
    listMenuProps,
    listMenuUserProps,
    profileImage: AvatarProps,
    jobsTabsProps: JobsTabsProps,
    processTabsProps: ProcessTabsProps,
    curriculumTabProps: CurriculumTabProps,
    searchbar: SearchbarProps,
    MobileSearchbarProps,
    breadcrumbProps: breadcrumbProps,
    homeUrl: '/home'
  }
}

export default meta

type Story = StoryObj<typeof LoginTemplate>

export const Default: Story = {}
