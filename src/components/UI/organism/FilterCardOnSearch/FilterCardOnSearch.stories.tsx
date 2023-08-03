import { Meta, StoryObj } from '@storybook/react'
import { FilterCardOnSearch } from './FilterCardOnSearch.component'
import { optionsFilterMenu } from '@constants/stories.constants'

const meta: Meta<typeof FilterCardOnSearch> = {
  title: 'Organism/Filter Card On Search',
  component: FilterCardOnSearch,
  args: {
    label: 'Sector Laboral',
    values: [optionsFilterMenu[1], optionsFilterMenu[2]],
    hasSwitch: false,
    switchText: 'remoto',
    searchPlaceholder: 'Buscar por un sector laboral'
    // search: (query) => Promise.resolve(console.log('search', query))
    // totalOptions: [optionsFilterMenu[1], optionsFilterMenu[2]],
    // setOptions: (filteredOptions) => console.log(filteredOptions),
  }
}

export default meta

type Story = StoryObj<typeof FilterCardOnSearch>

export const Default: Story = {}
