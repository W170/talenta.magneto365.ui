import { StoryObj, Meta } from '@storybook/react'
import ListSortMenu from './ListSortMenu.component'
import { optionsFilterOrderBy } from '@constants/stories'

const meta: Meta<typeof ListSortMenu> = {
  title: 'Molecules/List Sort Menu',
  component: ListSortMenu,
  args: {
    orderFields: optionsFilterOrderBy,
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
    textOrderFilter: optionsFilterOrderBy[1].label,
    setShowPopover: () => console.log('setShowPopover')
  }
}

export default meta

type Story = StoryObj<typeof ListSortMenu>

export const Default: Story = {}
