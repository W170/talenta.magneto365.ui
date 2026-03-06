import { Meta, StoryObj } from '@storybook/react'
import MobileSortMenu from './MobileSortMenu.component'
import { optionsFilterOrderBy } from '@constants/stories'

const meta: Meta<typeof MobileSortMenu> = {
  title: 'Organism/Mobile Sort Menu',
  component: MobileSortMenu,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    orderFields: optionsFilterOrderBy,
    orderByText: 'Organizar por',
    textOrderFilter: optionsFilterOrderBy[1].label,
    titleBtnOrder: 'Ordenar de forma ascendente',
    onClose: () => ({}),
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
    setShowPopover: () => console.log('setShowPopover')
  }
}

export default meta

type Story = StoryObj<typeof MobileSortMenu>

export const Default: Story = {}
