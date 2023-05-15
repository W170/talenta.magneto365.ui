import { Meta, StoryObj } from '@storybook/react'
import { MobileDrawer } from './MobileDrawer.component'

const meta: Meta<typeof MobileDrawer> = {
  title: 'Molecules/Mobile Drawer',
  component: MobileDrawer,
  tags: ['autodocs'],
  args: {}
}

export default meta

type Story = StoryObj<typeof MobileDrawer>

export const Default: Story = {}
