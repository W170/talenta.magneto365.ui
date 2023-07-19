import { Meta, StoryObj } from '@storybook/react'
import { optionsFilterMenu } from '@constants/stories.constants'
import { FilterCard } from './FilterCard.component'

const meta: Meta<typeof FilterCard> = {
  title: 'Organism/Filter Card',
  component: FilterCard,
  args: {
    totalOptions: [optionsFilterMenu[1], optionsFilterMenu[2]],
    // setOptions: (filteredOptions) => console.log(filteredOptions),
    title: 'Sector Laboral',
    hasSwitch: false,
    switchText: 'remoto',
    searchPlaceholder: 'Buscar por un sector laboral'
  }
}

export default meta

type Story = StoryObj<typeof FilterCard>

export const Default: Story = {
  args: {
    totalOptions: [optionsFilterMenu[1]],
    // setOptions: (filteredOptions) => console.log(filteredOptions),
    title: 'Sector Laboral',
    hasSwitch: false,
    switchText: 'remoto',
    searchPlaceholder: 'Buscar por un sector laboral'
  }
}

export const FullItems: Story = {
  args: {
    totalOptions: [...optionsFilterMenu, optionsFilterMenu[1], optionsFilterMenu[2]],
    // setOptions: (filteredOptions) => console.log(filteredOptions),
    title: 'Sector Laboral',
    hasSwitch: true,
    switchText: 'remoto',
    searchPlaceholder: 'Buscar por un sector laboral'
  }
}

export const WithScroll: Story = {
  args: {
    totalOptions: [...optionsFilterMenu, ...optionsFilterMenu],
    // setOptions: (filteredOptions) => console.log(filteredOptions),
    title: 'Sector Laboral',
    hasSwitch: false,
    switchText: 'remoto',
    searchPlaceholder: 'Buscar por un sector laboral'
  }
}
