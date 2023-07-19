import { Meta, StoryObj } from '@storybook/react'
import { FilterMenuItem } from './FilterMenuItem.component'

const meta: Meta<typeof FilterMenuItem> = {
  title: 'Molecules/Filters Menu Item',
  component: FilterMenuItem,
  args: {
    label: 'Filter menu item',
    amount: 200,
    isSelected: false,
    setIsSelected: (value) => console.log('Change isSelected', value)
  }
}

export default meta

type Story = StoryObj<typeof FilterMenuItem>

export const Default: Story = {}
