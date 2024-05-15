import { Meta, StoryObj } from '@storybook/react'

import { MobileDatePicker } from '@components/UI/organism/MobileDatePicker/MobileDatePicker.component'

import { monthOptionsValue, months, yearOptionsLabel, yearOptionsValue } from '@constants/stories/DatePicker.constants'

const storyMonths = []

for (let i = 0; i < Math.min(monthOptionsValue.length, months.length); i++) {
  storyMonths.push({ optionValue: monthOptionsValue[i], optionLabel: months[i] })
}

const storyYears = []

for (let i = 0; i < Math.min(yearOptionsValue.length, yearOptionsLabel.length); i++) {
  storyYears.push({ optionValue: yearOptionsValue[i], optionLabel: yearOptionsLabel[i] })
}

const meta: Meta<typeof MobileDatePicker> = {
  title: 'Organism/ Mobile DatePicker',
  component: MobileDatePicker,
  args: {
    applyLabel: 'Seleccionar',
    cancelLabel: 'Cerrar',
    monthsLabels: months,
    monthDateOptions: storyMonths,
    yearDateOptions: storyYears,
    monthPlaceholder: 'Month',
    yearPlaceholder: 'Year',
    selectionHeader: 'Selecciona un mes'
  }
}

export default meta

type Story = StoryObj<typeof MobileDatePicker>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true
  }
}
