import { Meta, StoryObj } from '@storybook/react'
import MobileMenuFilter from './MobileMenuFilter.component'
import { optionsMenuFilter } from '../../../../constants/stories.constants'

const meta: Meta<typeof MobileMenuFilter> = {
  title: 'Organism/Mobile Menu Filter',
  component: MobileMenuFilter,
  tags: ['autodocs'],
  args: {
    filterItems: optionsMenuFilter,
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
    isOpen: true,
    onClose: () => ({}),
    orderByText: 'Organizar por',
    setShowPopover: () => console.log('setShowPopover'),
    textOrderFilter: optionsMenuFilter[1].label
  }
}

export default meta

type Story = StoryObj<typeof MobileMenuFilter>

export const Default: Story = {}
