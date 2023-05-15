import { Meta, StoryObj } from '@storybook/react'
import { MobileDrawerMenu } from './MobileDrawerMenu.component'
import { MenuItems } from '../../../../constants/stories.constants'

const listProps = {
  urlParam: 'guardados',
  menuItems: MenuItems
}

const meta: Meta<typeof MobileDrawerMenu> = {
  title: 'Organism/Mobile Drawer',
  component: MobileDrawerMenu,
  tags: ['autodocs'],
  args: {
    listProps
  }
}

export default meta

type Story = StoryObj<typeof MobileDrawerMenu>

export const Default: Story = {}
