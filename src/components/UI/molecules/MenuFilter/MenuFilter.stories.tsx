import { StoryObj, Meta } from '@storybook/react'
import { MenuFilter } from './'
import { optionsMenuFilter } from '../../../../constants/stories.constants'

const meta: Meta<typeof MenuFilter> = {
  title: 'Molecules/Menu Filter',
  component: MenuFilter,
  args: {
    filterItems: optionsMenuFilter,
    textOrderFilter: 'Fecha de publicación',
    setFilter: (menuItem: { key: string }) => console.log(menuItem.key)
  }
}

export default meta

type Story = StoryObj<typeof MenuFilter>

export const Default: Story = {}