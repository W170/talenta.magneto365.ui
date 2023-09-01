import { Meta, StoryObj } from '@storybook/react'
import { optionsFilterMenu } from '@constants/stories.constants'
import { FilterCard } from './FilterCard.component'
import { ERenderType } from '@constants'
import { ISetIsApplied } from '@components/UI/template'

const meta: Meta<typeof FilterCard> = {
  title: 'Organism/Filter Card',
  component: FilterCard,
  args: {
    label: 'Sector Laboral',
    values: [optionsFilterMenu[1], optionsFilterMenu[2]],
    searchPlaceholder: 'Buscar por un sector laboral',
    switchText: 'remoto',
    setIsApplied: (filter: ISetIsApplied) => new Promise((resolve) => resolve(console.log({ filter })))
  }
}

export default meta

type Story = StoryObj<typeof FilterCard>

export const Default: Story = {
  args: {
    label: 'Sector Laboral',
    values: [optionsFilterMenu[1]],
    searchPlaceholder: 'Buscar por un sector laboral',
    switchText: 'remoto',
    setIsApplied: (filter: ISetIsApplied) => new Promise((resolve) => resolve(console.log({ filter })))
  }
}

export const FullItems: Story = {
  args: {
    label: 'Sector Laboral',
    values: [...optionsFilterMenu, ...optionsFilterMenu],
    searchPlaceholder: 'Buscar por un sector laboral',
    switchText: 'remoto',
    setIsApplied: (filter: ISetIsApplied) => new Promise((resolve) => resolve(console.log({ filter })))
  }
}

export const WithSearch: Story = {
  args: {
    label: 'Sector Laboral',
    values: [...optionsFilterMenu, ...optionsFilterMenu],
    renderType: ERenderType.multiSelect,
    searchPlaceholder: 'Buscar por un sector laboral',
    switchText: 'remoto',
    setIsApplied: (filter: ISetIsApplied) => new Promise((resolve) => resolve(console.log({ filter })))
  }
}
