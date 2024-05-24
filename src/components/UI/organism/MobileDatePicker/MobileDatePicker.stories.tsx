import { Meta, StoryObj } from '@storybook/react'

import { MobileDatePicker } from '@components/UI/organism/MobileDatePicker/MobileDatePicker.component'

import { storyMonths, months } from '@constants/stories/DatePicker.constants'

const meta: Meta<typeof MobileDatePicker> = {
  title: 'Organism/ Mobile DatePicker',
  component: MobileDatePicker,
  args: {
    applyLabel: 'Seleccionar',
    cancelLabel: 'Cerrar',
    monthsLabels: months,
    monthDateOptions: storyMonths,
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
