import { Meta, StoryObj } from '@storybook/react'

import { MobileDatePicker } from '@components/UI/organism/MobileDatePicker/MobileDatePicker.component'

import { monthOptionsValue, months } from '@constants/stories/DatePicker.constants'

const storyMonths = []

for (let i = 0; i < Math.min(monthOptionsValue.length, months.length); i++) {
  storyMonths.push({ optionValue: monthOptionsValue[i], optionLabel: months[i] })
}

const meta: Meta<typeof MobileDatePicker> = {
  title: 'Molecules/ Mobile DatePicker',
  component: MobileDatePicker,
  args: {
    applyLabel: 'Seleccionar',
    cancelLabel: 'Cerrar',
    dateOptions: storyMonths,
    selectionHeader: 'Selecciona un mes'
  }
}

export default meta

type Story = StoryObj<typeof MobileDatePicker>

export const Default: Story = {}
