import { Meta, StoryObj } from '@storybook/react'
import SideFilter from './SideFilter.component'
import data from './filtersNormalized.json'
import { IFilter } from './SideFilter.interface'

const meta: Meta<typeof SideFilter> = {
  title: 'Template/Side Filter',
  component: SideFilter,
  args: {
    filters: data as unknown as IFilter[],
    setIsApplied: ({ id, field, isApplied }: { field: string; id: string | number; isApplied: boolean }) =>
      new Promise((resolve) => resolve(console.log({ id, field, isApplied }))),
    totalAppliedFilters: 1,
    clearFilters: () => new Promise((resolve) => resolve(console.log('clearFilters'))),
    title: 'Filtrar empleos',
    buttonText: 'Limpiar',
    switchText: 'Apto para personas con discapacidad',
    loading: false
  }
}

export default meta
type Story = StoryObj<typeof SideFilter>

export const Default: Story = {}
