import { Meta, StoryObj } from '@storybook/react'
import { ListMenuIcons } from './ListMenuIcons.component'
import { Logout, MenuItems, Settings } from '@constants/stories'

const urlParams = 'guardados'

const meta: Meta<typeof ListMenuIcons> = {
  title: 'Molecules/List Menu Icons',
  component: ListMenuIcons,
  tags: ['autodocs'],
  args: {
    urlParam: urlParams,
    menuItems: MenuItems,
    logout: Logout,
    settings: Settings
  }
}

export default meta

type Story = StoryObj<typeof ListMenuIcons>

export const Default: Story = {}
