import { Meta, StoryObj } from '@storybook/react'
import { FilterHeader } from './FilterHeader.component'

const meta: Meta<typeof FilterHeader> = {
  title: 'Organism/Filter Header',
  component: FilterHeader,
  args: {
    title: 'Filtrar empleos',
    buttonText: 'Limpiar',
    totalApplied: 5,
    clearFilters: () => new Promise((resolve) => resolve(console.log('clearFilters'))),
    switchText: 'Apto para personas con discapacidad'
  }
}
export default meta

type Story = StoryObj<typeof FilterHeader>

export const Default: Story = {}
