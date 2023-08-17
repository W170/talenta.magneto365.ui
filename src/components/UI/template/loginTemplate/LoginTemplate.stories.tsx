import { Meta, StoryObj } from '@storybook/react'
import { LoginTemplate } from './LoginTemplate.component'
import { MobileSearchbarProps, breadcrumbProps } from '../../../../constants/stories.constants'
import {
  AvatarProps,
  CurriculumTabProps,
  JobsTabsProps,
  ProcessTabsProps,
  listMenuProps,
  listMenuUserProps,
  SearchbarProps
} from '../../../../constants/stories.constants'

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
