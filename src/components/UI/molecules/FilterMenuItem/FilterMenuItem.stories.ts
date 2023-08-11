import { Meta, StoryObj } from '@storybook/react'
import { ISetIsApplied } from '@components/UI/template'
import { FilterMenuItem } from './FilterMenuItem.component'

const meta: Meta<typeof FilterMenuItem> = {
  title: 'Molecules/Filters Menu Item',
  component: FilterMenuItem,
  args: {
    id: 1,
    label: 'Filter menu item',
    total: 200,
    field: '',
    multiple: false,
    loading: false,
    isApplied: false,
    hasTotal: true,
    isSearched: false,
    setIsApplied: (filter: ISetIsApplied) => new Promise((resolve) => resolve(console.log({ filter })))
  }
}

export default meta

type Story = StoryObj<typeof FilterMenuItem>

export const Default: Story = {}
