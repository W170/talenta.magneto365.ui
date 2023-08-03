import { Meta, StoryObj } from '@storybook/react'
import { optionsFilterMenu } from '@constants/stories.constants'
import { FilterCard } from './FilterCard.component'
import { ERenderType } from '@components/UI/template/SideFilter/SideFilter.component'

const meta: Meta<typeof FilterCard> = {
  title: 'Organism/Filter Card',
  component: FilterCard,
  args: {
    values: [optionsFilterMenu[1], optionsFilterMenu[2]],
    setIsApplied: ({ id, field, isApplied }: { field: string; id: string | number; isApplied: boolean }) =>
      new Promise((resolve) => resolve(console.log({ id, field, isApplied }))),
    label: 'Sector Laboral',
    hasSwitch: false,
    switchText: 'remoto',
    searchPlaceholder: 'Buscar por un sector laboral'
  }
}

export default meta

type Story = StoryObj<typeof FilterCard>

export const Default: Story = {
  args: {
    values: [optionsFilterMenu[1]],
    setIsApplied: ({ id, field, isApplied }: { field: string; id: string | number; isApplied: boolean }) =>
      new Promise((resolve) => resolve(console.log({ id, field, isApplied }))),
    label: 'Sector Laboral',
    hasSwitch: false,
    switchText: 'remoto',
    searchPlaceholder: 'Buscar por un sector laboral'
  }
}

export const FullItems: Story = {
  args: {
    values: [...optionsFilterMenu, ...optionsFilterMenu],
    setIsApplied: ({ id, field, isApplied }: { field: string; id: string | number; isApplied: boolean }) =>
      new Promise((resolve) => resolve(console.log({ id, field, isApplied }))),
    label: 'Sector Laboral',
    hasSwitch: true,
    switchText: 'remoto',
    searchPlaceholder: 'Buscar por un sector laboral'
  }
}

export const WithSearch: Story = {
  args: {
    values: [...optionsFilterMenu, ...optionsFilterMenu],
    setIsApplied: ({ id, field, isApplied }: { field: string; id: string | number; isApplied: boolean }) =>
      new Promise((resolve) => resolve(console.log({ id, field, isApplied }))),
    label: 'Sector Laboral',
    hasSwitch: false,
    switchText: 'remoto',
    searchPlaceholder: 'Buscar por un sector laboral',
    renderType: ERenderType.multiSelect
  }
}
