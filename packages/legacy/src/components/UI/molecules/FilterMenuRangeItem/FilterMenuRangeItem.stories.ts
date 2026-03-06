import { Meta, StoryObj } from '@storybook/react'
import { ISetIsApplied } from '@components/UI/template'
import { FilterMenuRangeItem } from './FilterMenuRangeItem.component'

const meta: Meta<typeof FilterMenuRangeItem> = {
  title: 'Molecules/Filters Menu Range Item',
  component: FilterMenuRangeItem,
  args: {
    id: 1,
    label: 'Filter menu range item',
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

type Story = StoryObj<typeof FilterMenuRangeItem>

export const Default: Story = {}
