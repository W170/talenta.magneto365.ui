import { Meta, StoryObj } from '@storybook/react'
import MegaMenuDrawerItem from './MegaMenuDrawerItem.component'
import { ArrowDown2 } from '../../../../constants/icons.constants'

const meta: Meta<typeof MegaMenuDrawerItem> = {
  title: 'Atoms/Mega Menu Drawer Item',
  component: MegaMenuDrawerItem,
  tags: ['autodocs'],
  args: { isActive: true, text: 'Text Here!', icon: ArrowDown2, url: '#' }
}

export default meta

type Story = StoryObj<typeof MegaMenuDrawerItem>

export const Default: Story = {}
