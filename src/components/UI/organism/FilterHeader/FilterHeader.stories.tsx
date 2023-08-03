import { Meta, StoryObj } from '@storybook/react'
import { FilterHeader } from './FilterHeader.component'

const meta: Meta<typeof FilterHeader> = {
  title: 'Organism/Filter Header',
  component: FilterHeader,
  args: {
    title: 'Filtrar empleos',
    buttonText: 'Limpiar',
    switchText: 'Apto para personas con discapacidad',
    filtersApplied: 5,
    clearFilters: () => new Promise((resolve) => resolve(console.log('clearFilters')))
  }
}
export default meta

type Story = StoryObj<typeof FilterHeader>

export const Default: Story = {}
