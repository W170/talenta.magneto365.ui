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
    orderByText: 'Organizar por'
  }
}

export default meta

type Story = StoryObj<typeof MobileMenuFilter>

export const Default: Story = {}
