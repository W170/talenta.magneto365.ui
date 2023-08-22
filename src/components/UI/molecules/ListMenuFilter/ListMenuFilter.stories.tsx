import { StoryObj, Meta } from '@storybook/react'
import ListMenuFilter from './ListMenuFilter.component'
import { optionsFilterOrderBy } from '../../../../constants/stories.constants'

const meta: Meta<typeof ListMenuFilter> = {
  title: 'Molecules/List Menu Filter',
  component: ListMenuFilter,
  args: {
    filterItems: optionsFilterOrderBy,
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
    textOrderFilter: optionsFilterOrderBy[1].label,
    setShowPopover: () => console.log('setShowPopover')
  }
}

export default meta

type Story = StoryObj<typeof ListMenuFilter>

export const Default: Story = {}
