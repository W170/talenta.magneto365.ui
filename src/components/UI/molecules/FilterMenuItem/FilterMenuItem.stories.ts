import { Meta, StoryObj } from '@storybook/react'
import { FilterMenuItem } from './FilterMenuItem.component'

const meta: Meta<typeof FilterMenuItem> = {
  title: 'Molecules/Filters Menu Item',
  component: FilterMenuItem,
  args: {
    label: 'Filter menu item',
    total: 200,
    isApplied: false,
    setIsApplied: ({ id, field, isApplied }: { field: string; id: string | number; isApplied: boolean }) =>
      new Promise((resolve) => resolve(console.log({ id, field, isApplied })))
  }
}

export default meta

type Story = StoryObj<typeof FilterMenuItem>

export const Default: Story = {}
