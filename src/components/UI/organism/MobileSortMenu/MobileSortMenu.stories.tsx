import { Meta, StoryObj } from '@storybook/react'
import MobileSortMenu from './MobileSortMenu.component'
import { optionsFilterOrderBy } from '../../../../constants/stories.constants'

const meta: Meta<typeof MobileSortMenu> = {
  title: 'Organism/Mobile Sort Menu',
  component: MobileSortMenu,
  tags: ['autodocs'],
  args: {
    orderFields: optionsFilterOrderBy,
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
    isOpen: true,
    onClose: () => ({}),
    orderByText: 'Organizar por',
    setShowPopover: () => console.log('setShowPopover'),
    textOrderFilter: optionsFilterOrderBy[1].label
  }
}

export default meta

type Story = StoryObj<typeof MobileSortMenu>

export const Default: Story = {}
