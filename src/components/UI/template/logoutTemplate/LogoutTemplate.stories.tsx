import { Meta, StoryObj } from '@storybook/react'
import { LogoutTemplate } from './LogoutTemplate.component'
import {
  ButtonsProps,
  ButtonsProps2,
  ListIcon,
  headerProps,
  listMenuProps
} from '../../../../constants/stories.constants'

const meta: Meta<typeof LogoutTemplate> = {
  title: 'Template/Logout',
  component: LogoutTemplate,
  tags: ['autodocs'],
  args: {
    login: ButtonsProps2,
    createAccount: ButtonsProps,
    listIcon: ListIcon,
    headerProps: headerProps,
    listMenuProps: listMenuProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutTemplate>

export const Default: Story = {}
