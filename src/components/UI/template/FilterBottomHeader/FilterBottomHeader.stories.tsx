import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import FilterBottomHeader from './FilterBottomHeader.component'
import { optionsFilterOrderBy } from '../../../../constants/stories.constants'

const meta: Meta<typeof FilterBottomHeader> = {
  title: 'Template/Filter Bottom Header',
  component: FilterBottomHeader,
  tags: ['autodocs'],
  args: {
    textButtonFilter: 'FILTROS',
    filterSummary: '280 empleos',
    filterItems: optionsFilterOrderBy,
    textOrderFilter: 'Fecha de publicación',
    orderByText: 'Organizar por',
    isFiltersOpen: false,
    loading: false,
    setIsFiltersOpen: () => console.log('setIsFiltersOpen'),
    orderFilter: () => console.log('orderFilter'),
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key)
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '-16px' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof FilterBottomHeader>

export const Default: Story = {}
