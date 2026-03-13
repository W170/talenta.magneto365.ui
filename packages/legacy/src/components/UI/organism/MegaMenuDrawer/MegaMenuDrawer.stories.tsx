import { Meta, StoryObj } from '@storybook/react'
import { MegaMenuDrawer } from './MegaMenuDrawer.component'

const meta: Meta<typeof MegaMenuDrawer> = {
  title: 'Legacy/Organism/Mega Menu Drawer',
  component: MegaMenuDrawer,
  tags: ['autodocs'],
  args: {}
}

export default meta

type Story = StoryObj<typeof MegaMenuDrawer>

export const Default: Story = {}
