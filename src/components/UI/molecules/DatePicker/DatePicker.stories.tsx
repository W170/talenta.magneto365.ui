import { Meta, StoryObj } from '@storybook/react'
import { generateYearArray } from './utils'
import { DatePicker } from './DatePicker.component'

const meta: Meta<typeof DatePicker> = {
  title: 'Molecules/Date Picker',
  component: DatePicker,
  args: {}
}

const monthOptionsValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const monthOptionsLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const yearOptionsValue = generateYearArray().yearsArray
const yearOptionsLabels = generateYearArray().yearsArraytoString

export default meta

type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  args: {
    monthPlaceholder: 'Month',
    monthOptionsValue: monthOptionsValue,
    monthOptionsLabels: monthOptionsLabels,
    yearPlaceholder: 'Year',
    yearOptionsValue: yearOptionsValue,
    yearOptionsLabel: yearOptionsLabels
  }
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabledDate: true
  }
}
