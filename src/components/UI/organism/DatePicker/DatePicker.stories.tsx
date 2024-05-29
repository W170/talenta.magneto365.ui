import { Meta, StoryObj } from '@storybook/react'
import { DatePickerComponent } from './DatePicker.component'
import { DatePickerProps, MobileDatePickerProps } from '../../../../constants/stories/DatePicker.constants'

const meta: Meta<typeof DatePickerComponent> = {
  title: 'Organism/ Date Picker Component',
  component: DatePickerComponent,
  args: {
    datePickerProps: DatePickerProps,
    mobileDatePickerProps: MobileDatePickerProps
  }
}

export default meta

type Story = StoryObj<typeof DatePickerComponent>

export const Default: Story = {}
