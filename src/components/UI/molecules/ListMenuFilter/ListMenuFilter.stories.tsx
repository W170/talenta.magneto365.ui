import { StoryObj, Meta } from '@storybook/react'
import ListMenuFilter from './ListMenuFilter.component'
import { optionsMenuFilter } from '../../../../constants/stories.constants'

const meta: Meta<typeof ListMenuFilter> = {
  title: 'Molecules/List Menu Filter',
  component: ListMenuFilter,
  args: {
    filterItems: optionsMenuFilter,
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key)
  }
}

export default meta

type Story = StoryObj<typeof ListMenuFilter>

export const Default: Story = {}
