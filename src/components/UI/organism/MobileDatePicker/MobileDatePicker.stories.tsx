import { Meta, StoryObj } from '@storybook/react'

import { MobileDatePicker } from './MobileDatePicker.component'

import { storyMonths, months, storyYears } from '../../../../constants/stories/DatePicker.constants'

const meta: Meta<typeof MobileDatePicker> = {
  title: 'Organism/ Mobile DatePickerResponsive',
  component: MobileDatePicker,
  args: {
    applyLabel: 'Seleccionar',
    cancelLabel: 'Cerrar',
    monthsLabels: months,
    monthDateOptions: storyMonths,
    yearDateOptions: storyYears,
    monthPlaceholder: 'Month',
    yearPlaceholder: 'Year',
    selectionMonthHeader: 'Selecciona un mes',
    selectionYearHeader: 'Selecciona un año',
    value: new Date()
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
