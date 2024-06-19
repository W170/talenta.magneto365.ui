import { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker.component'
import { months } from '../../../../constants/stories/DatePicker.constants'

const meta: Meta<typeof DatePicker> = {
  title: 'Molecules/Date Picker',
  component: DatePicker,
  args: {}
}
export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  args: {
    monthPlaceholder: 'Month',
    monthOptionsLabels: months,
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
