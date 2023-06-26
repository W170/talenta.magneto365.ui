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
    textOrderFilter: 'Fecha de publicación',
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key)
  }
}

export default meta

type Story = StoryObj<typeof FilterBottomHeader>

export const Default: Story = {}
