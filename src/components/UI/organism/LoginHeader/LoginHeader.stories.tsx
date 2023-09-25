import { LoginHeader } from './LoginHeader.component'
import { Meta, StoryObj } from '@storybook/react'
import {
  AvatarProps,
  CurriculumTabProps,
  JobsTabsProps,
  ProcessTabsProps,
  listMenuUserProps,
  SearchbarProps,
  MobileSearchbarProps,
  breadcrumbProps
} from '@constants/stories'

const meta: Meta<typeof LoginHeader> = {
  title: 'Organism/Login Header',
  component: LoginHeader,
  args: {
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

type Story = StoryObj<typeof LoginHeader>

export const Default: Story = {}
