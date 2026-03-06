import { ChangeEvent } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { FilterSearchItem } from './FilterSearchItem.component'

const meta: Meta<typeof FilterSearchItem> = {
  title: 'Molecules/Filter Search Item',
  component: FilterSearchItem,
  args: {
    handleSearch: (event: ChangeEvent<HTMLInputElement>, inputRef: React.MutableRefObject<null>) =>
      console.log('filteredOptions: ', { value: event.target.value, inputRef }),
    placeholder: 'Search one option',
    disabled: false,
    loading: false
  }
}

export default meta

type Story = StoryObj<typeof FilterSearchItem>

export const Default: Story = {}
