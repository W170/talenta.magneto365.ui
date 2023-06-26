import { LoginHeader } from './LoginHeader.component'
import { Meta, StoryObj } from '@storybook/react'
import {
  AvatarProps,
  breadcrumbText,
  CurriculumTabProps,
  JobsTabsProps,
  ProcessTabsProps,
  listMenuUserProps,
  SearchbarProps,
  MobileSearchbarProps
} from '../../../../constants/stories.constants'

const meta: Meta<typeof LoginHeader> = {
  title: 'Organism/Login Header',
  component: LoginHeader,
  args: {
    listMenuUserProps,
    breadcrumbText,
    profileImage: AvatarProps,
    jobsTabsProps: JobsTabsProps,
    processTabsProps: ProcessTabsProps,
    curriculumTabProps: CurriculumTabProps,
    searchbar: SearchbarProps,
    MobileSearchbarProps,
    homeUrl: '/home'
  }
}

export default meta

type Story = StoryObj<typeof LoginHeader>

export const Default: Story = {}
