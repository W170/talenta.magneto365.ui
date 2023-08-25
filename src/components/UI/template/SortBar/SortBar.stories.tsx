import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SortBar from './SortBar.component'
import { optionsFilterOrderBy } from '../../../../constants/stories.constants'

const meta: Meta<typeof SortBar> = {
  title: 'Template/Sort Bar',
  component: SortBar,
  tags: ['autodocs'],
  args: {
    textSortButton: 'FILTROS',
    filterSummary: '280 empleos',
    orderFields: optionsFilterOrderBy,
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

type Story = StoryObj<typeof SortBar>

export const Default: Story = {}
