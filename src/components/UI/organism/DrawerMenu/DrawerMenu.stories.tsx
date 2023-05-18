import { Meta, StoryObj } from '@storybook/react'
import { DrawerMenu } from './DrawerMenu.component'
import { login, createAccount, ListIcon, listMenuProps, headerProps } from '../../../../constants/stories.constants'

const meta: Meta<typeof DrawerMenu> = {
  title: 'Organism/Drawer Menu',
  component: DrawerMenu,
  tags: ['autodocs'],
  args: {
    listIcon: ListIcon,
    login,
    createAccount,
    headerProps: headerProps,
    listMenuProps: listMenuProps
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof DrawerMenu>

export const Default: Story = {}
