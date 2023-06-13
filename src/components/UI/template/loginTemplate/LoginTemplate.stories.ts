import { Meta, StoryObj } from '@storybook/react'
import { LoginTemplate } from './LoginTemplate.component'
import { MobileSearchbarProps } from '../../../../constants/stories.constants'
import {
  AvatarProps,
  breadcrumbText,
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
    breadcrumbText,
    profileImage: AvatarProps,
    jobsTabsProps: JobsTabsProps,
    processTabsProps: ProcessTabsProps,
    curriculumTabProps: CurriculumTabProps,
    searchbar: SearchbarProps,
    MobileSearchbarProps
  }
}

export default meta

type Story = StoryObj<typeof LoginTemplate>

export const Default: Story = {}
