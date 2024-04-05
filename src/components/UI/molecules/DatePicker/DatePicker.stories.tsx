import { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker.component'

const meta: Meta<typeof DatePicker> = {
  title: 'Molecules/Date Picker',
  component: DatePicker,
  args: {}
}

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

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  args: {
    monthPlaceholder: 'Month',
    monthOptionsLabels: monthOptionsLabels,
    yearPlaceholder: 'Year',
    value: new Date()
  }
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true
  }
}
