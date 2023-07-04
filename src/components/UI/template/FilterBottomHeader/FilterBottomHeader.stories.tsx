import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import FilterBottomHeader from './FilterBottomHeader.component'
import { optionsMenuFilter } from '../../../../constants/stories.constants'

const meta: Meta<typeof FilterBottomHeader> = {
  title: 'Template/Filter Bottom Header',
  component: FilterBottomHeader,
  tags: ['autodocs'],
  args: {
    textButtonFilter: 'FILTROS',
    filterSummary: '280 empleos',
    openFilterDrawer: () => console.log('openFilterDrawer'),
    orderFilter: () => console.log('orderFilter'),
    filterItems: optionsMenuFilter,
    textOrderFilter: optionsMenuFilter[1].label,
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
    orderByText: 'Organizar por',
    isOpen: false,
    loading: false
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
