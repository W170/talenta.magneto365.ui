import { Meta, StoryObj } from '@storybook/react'

import { DateSelection } from '@components/UI/molecules/DateSelection/DateSelection.component'
import { monthOptionsValue, months, yearOptionsLabel, yearOptionsValue } from '@constants/stories/DatePicker.constants'

const storyMonths = []

for (let i = 0; i < Math.min(monthOptionsValue.length, months.length); i++) {
  storyMonths.push({ optionValue: monthOptionsValue[i], optionLabel: months[i] })
}

const storyYears = []

for (let i = 0; i < Math.min(yearOptionsValue.length, yearOptionsLabel.length); i++) {
  storyYears.push({ optionValue: yearOptionsValue[i], optionLabel: yearOptionsLabel[i] })
}

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
