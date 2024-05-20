import { Meta, StoryObj } from '@storybook/react'

import { DateSelection } from '@components/UI/molecules/DateSelection/DateSelection.component'
import { storyMonths, storyYears } from '@constants/stories/DatePicker.constants'

const meta: Meta<typeof DateSelection> = {
  title: 'Molecules/Date Selection',
  component: DateSelection,
  args: {
    isOpen: true,
    onClose: () => ({}),
    dateOptions: storyMonths,
    selectionHeader: 'Selecciona un mes',
    cancelLabel: 'Cerrar',
    applyLabel: 'Seleccionar'
  }
}

export default meta

type Story = StoryObj<typeof DateSelection>

export const Default: Story = {}

export const Years: Story = {
  args: {
    isOpen: true,
    onClose: () => ({}),
    dateOptions: storyYears,
    selectionHeader: 'Selecciona un año',
    cancelLabel: 'Cerrar',
    applyLabel: 'Seleccionar'
  }
}
