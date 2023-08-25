import { Meta, StoryObj } from '@storybook/react'
import MobileSortMenu from './MobileSortMenu.component'
import { optionsFilterOrderBy } from '../../../../constants/stories.constants'

const meta: Meta<typeof MobileSortMenu> = {
  title: 'Organism/Mobile Sort Menu',
  component: MobileSortMenu,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    mainTitle: 'Ofertas de empleo en colombia',
    orderFields: optionsFilterOrderBy,
    orderByText: 'Organizar por',
    textOrderFilter: optionsFilterOrderBy[1].label,
    onClose: () => ({}),
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
    setShowPopover: () => console.log('setShowPopover')
  }
}

export default meta

type Story = StoryObj<typeof MobileSortMenu>

export const Default: Story = {}
