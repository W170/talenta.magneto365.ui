import { StoryObj, Meta } from '@storybook/react'
import { SortMenu } from './index'
import { optionsFilterOrderBy } from '@constants'

const meta: Meta<typeof SortMenu> = {
  title: 'Molecules/ Sort Menu',
  component: SortMenu,
  args: {
    orderFields: optionsFilterOrderBy,
    textOrderFilter: 'Fecha de publicación',
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
    loading: false
  }
}

export default meta

type Story = StoryObj<typeof SortMenu>

export const Default: Story = {}
