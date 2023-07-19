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
    cleanFilters: () => console.log('This function clean all filters')
  }
}

export default meta

type Story = StoryObj<typeof FilterHeader>

export const Default: Story = {}
