import { Meta, StoryObj } from '@storybook/react'
import { MobileDrawerMenu } from './MobileDrawerMenu.component'
import { listMenuUserProps } from '@constants/stories'

const meta: Meta<typeof MobileDrawerMenu> = {
  title: 'Legacy/Organism/Mobile Drawer',
  component: MobileDrawerMenu,
  tags: ['autodocs'],
  args: {
    listMenuUserProps
  }
}

export default meta

type Story = StoryObj<typeof MobileDrawerMenu>

export const Default: Story = {}
