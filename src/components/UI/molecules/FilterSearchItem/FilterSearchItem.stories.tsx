import { Meta, StoryObj } from '@storybook/react'
import { FilterSearchItem } from './FilterSearchItem.component'
import { optionsFilterMenu } from '@constants/stories.constants'

const meta: Meta<typeof FilterSearchItem> = {
  title: 'Molecules/Filter Search Item',
  component: FilterSearchItem,
  args: {
    options: optionsFilterMenu,
    placeholder: 'Search one option',
    setOptions: (filteredOptions) => console.log(filteredOptions)
  }
}

export default meta

type Story = StoryObj<typeof FilterSearchItem>

export const Default: Story = {}
